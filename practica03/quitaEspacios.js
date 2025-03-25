'use strict'

function quitaEspacios(str){
    if (arguments.length !== 1) {
        throw new Error("La función debe recibir únicamente un parámetro");
    }

    if (typeof(str) !== "string"){
        throw new Error("El parámetro debe ser una string");
    }

    let newStr = str
    .split('')
    .map(element => {
        if (element === ' '){
           return '_';
            
        } else {
            return element;
        }
    })
    .join('');
    return newStr
}

console.log(quitaEspacios("Hola don Pepito"))
console.log(quitaEspacios("Hola, don Pepito"))
console.log(quitaEspacios("Adios, Don Jose"))
console.log(quitaEspacios("AdiosDonJose"))

