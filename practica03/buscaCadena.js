'use strict'

function buscaCadena(strToFind, strBase){
    let count = 0;
    let arr = [];
    if (typeof(strToFind) !== 'string'){
        throw new Error("El elemento que queremos buscar debe ser una string");
    }
    if (typeof(strBase) !== 'string'){
        throw new Error("El elemento donde buscaremos la cadena debe ser una string");
    }
    
    for (let char of strBase) {
        if (strToFind.includes(char)) {
            count++;
        }
    }
        
    

    return count
}


console.log(buscaCadena("H","Hola don Pepito, Hola don Jose"));
console.log(buscaCadena("Ho","Hola, don Pepito, Hola, don Jose"));
console.log(buscaCadena("Ho","Hola, don Pepito, HOla, don Jose"));
console.log(buscaCadena("5","125548518195815"));