'use strict'

function validateLen(long, eqZero){
    if (typeof(long) !== 'number'){
        throw new Error("Las longitudes deben ser enteros");
    }
    if (eqZero){
        if (long < 0){
            throw new Error("Longitud menor a 0. Debe ser cero o mayor");
        }
    } else {
        if (long <= 0){
            throw new Error("Longitud cero o menor. Debe ser mayor que cero")
        }
    }
    return ;
}

function validateString(specialStr){
    if (typeof(specialStr) !== 'string'){
        throw new Error("No estás pasando algo como deben ser presentados, como una string");
    }
}



function buscaCadena(strToFind, strBase){
    let count = 0;
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
    return count;
}

export function valida(passwd, longMin, minusMin, mayusMin, digMin, espMin, especial){
    let letters = "abcdefghijklmnñopqrstuvxyz";
    let mayusLetters = letters.toUpperCase();
    let digits = "0123456789"
    let errors = [];

    validateString(passwd);
    validateLen(longMin, false);
    validateLen(minusMin,true);
    validateLen(mayusMin,true);
    validateLen(digMin,true);
    validateLen(espMin,true);
    validateString(especial);


    if (passwd.length < longMin) {
        errors.push("Error: La longitud de la cadena no es correcta. Debe ser como minimo de " + longMin + " caracteres");
    }
    
    if (buscaCadena(letters, passwd) < minusMin){
        errors.push("Error: El numero de letras minusculas no es correcto. Debe ser como minimo de " + minusMin + " caracteres");
    }

    if (buscaCadena(mayusLetters, passwd) < mayusMin){
        errors.push("Error: El numero de letras mayusculas no es correcto. Debe ser como minimo de " + mayusMin + " caracteres");
    }

    if (buscaCadena(digits, passwd) < digMin){
        errors.push("Error: El numero de digitos no es correcto. Debe ser como minimo de " + digMin + " digitos");
    }

    if (buscaCadena(especial, passwd) < espMin){
        errors.push("Error: El numero de caracteres especiales no es correcto. Debe ser como minimo de " + espMin + " digitos");
    }

    if (errors.length > 0){
        return errors;
    } else {
        return "ok";
    }
}

console.log(valida("PepitoGrillo123!",8,4,1,1,1,',.-{}[]!"·$%&/()=?¿¡'));
console.log(valida("pepitogrillo123!",8,4,1,1,1,',.-{}[]!"·$%&/()=?¿¡'));
console.log(valida("ññññÑÑÑÑ123!",8,4,1,1,1,',.-{}[]!"·$%&/()=?¿¡'));
console.log(valida("pEp",8,4,1,1,1,',.-{}[]!"·$%&/()=?¿¡'));