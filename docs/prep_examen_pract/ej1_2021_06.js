'use strict'

function calculateDiscriminante(coefs){
    return (coefs[1]**2)-(4*coefs[0]*coefs[2]);
}

function checkEquationPossible(coefs) {
    let discriminante = calculateDiscriminante(coefs);
    let errors = [];
    if (coefs[0] === 0){
        errors.push("Si el primer coeficiente es 0, la ecuación es de primer grado.")
    }
    if (discriminante < 0){
        errors.push("Discriminante negativo. Raíz imaginaria. Solucion imaginaria")
    }
    if (errors.length){
        let div = document.querySelector("#solution");
        let ul = document.createElement("ul");
        for (let error of errors){    
            let li = document.createElement("li");
            li.textContent = error;
            ul.appendChild(li);
        }
        div.appendChild(ul);
        return false;
    }
    return true;
}

function positiveSum(coefs, discriminante){
    return ((0-coefs[1])+Math.sqrt(discriminante))/(2*coefs[0])
}


function negativeSum(coefs, discriminante){
    return ((0-coefs[1])-Math.sqrt(discriminante))/(2*coefs[0])
}
function checkErrors(coefs, round){
    let errors = [];
    let original;
    let numberCoefs = [];
    
    let div = document.querySelector("#solution");
    div.textContent = "";
    let roundNumber = Number(round);
    if (isNaN(roundNumber)){
        errors.push("El numero para redondear debe ser un numero")
    }
    for (let coef of coefs){
        original = coef;
        coef = Number(coef)
        if (isNaN(coef)){
            errors.push("Los coeficientes deben ser numeros validos. El coeficiente " + original + " no cumple")
        }
        else {
            numberCoefs.push(coef)
        }
    }
    if (errors.length > 0){
        let ul = document.createElement("ul");
        for (let error of errors){
            let li = document.createElement("li");
            li.textContent = error;
            ul.appendChild(li);
        }
        div.appendChild(ul);
        return false;
    }
    else {
        if (checkEquationPossible(numberCoefs)){
            let discriminante = calculateDiscriminante(numberCoefs);
            let positive = positiveSum(numberCoefs, discriminante);
            let negative = negativeSum(numberCoefs, discriminante);
            
            
            let p1 = document.createElement("p")
            p1.textContent = "La ecuación tiene una solución: x= " + positive.toFixed(roundNumber);
            let p2 = document.createElement("p")
            p2.textContent = "La ecuación tiene una solución: x= " + negative.toFixed(roundNumber);
            div.appendChild(p1);
            div.appendChild(p2);
        }
    }
    
}

function resolve(event){

    event.preventDefault();
    let a = document.querySelector("#a").value;
    let b = document.querySelector("#b").value;
    let c = document.querySelector("#c").value;
    let round = document.querySelector("#round").value
    let coefs = [a,b,c];
    checkErrors(coefs, round);

}

function setForm(){
    let form = document.querySelector("#coef_form");
    form.addEventListener("submit", resolve);
}

setForm();