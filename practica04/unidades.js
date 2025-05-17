'use strict'

let number = document.querySelector('#number').textContent;
let units = document.querySelector('#units').textContent;
let result = document.querySelector('#result');

function getNumber(str){
    let num = Number(str);
   
    return num;

}



function checkUnits(units){
    let unidades = ["m", "cm", "in", "yd"];
    return unidades.includes(units);
}

function convierte(meters, units){
    let errors = [];
    let error = false;
    let num = getNumber(meters);
    if (!checkUnits(units)){
        errors.push("Error: unidades no válidas");
        error = true;
    }
    if (!isNaN(num)){
        switch (units){
            case "m":
                num = num * 1;
                break;
            case "cm":
                num = num * 100;
                break;
            case "in":
                num = num / 0.0254;
                break;
            case "yd":
                num = num / 0.9144;
                break;
        }
    } else {
        errors.push("Error: no ha especificado un numero");
        error = true;
    }
    if (!error){
        return [String(num)];
    }else {
        return errors;
    }
}

result.textContent = (convierte(number, units));