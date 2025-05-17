'use strict';

function arrayOfArrays(arr){
    let check = true;
    for (let array of arr){
        if (!Array.isArray(array)){
            check = false;
        }
    }
    return check;
}

function buscaArrays(arr1, elem){
    let found = false;

    if (arguments.length !== 2) {
        throw new Error("La función debe recibir dos parámetros");
    }
    if (!Array.isArray(arr1)){
        throw new Error("El primer elemento debe ser un array.");
    }

    if (!arrayOfArrays(arr1)){
        throw new Error("El array debe estar relleno de arrays.");
    }

    for (let miniArray of arr1) {
        if (miniArray.includes(elem)){
            found = true;
        }
    }
    return found;
}

console.log(buscaArrays([[1,2], [2,3]],1));
console.log(buscaArrays([["hola","adios"], ["uno", "dos"]], 1));

console.log(buscaArrays([[1,2], [2,3]],[1,2]));