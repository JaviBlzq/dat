'use strict'

function precioMedio(lista){
    let unidadesTotales = 0;
    let precioMedio = 0;
    if (!Array.isArray(lista)){
        throw new Error("debe ser una lista");
    }
    if (arguments.length !== 1){
        throw new Error("solo se puede recibir un parametro");
    }
    if (lista.length === 0){
        throw new Error("la lista esta vacia");
    }
    for (let element of lista){
        if (!Array.isArray(element)){
            throw new Error("debe ser una lista de listas");
        } 
        if (element.length === 0 ){
            throw new Error("la sublista esta vacia");
        } else if (element.length !== 2){
            throw new Error("la sublista debe tener longitud 2");
        }
        unidadesTotales += element[0];
    }
    for (let element of lista){
        precioMedio += (element[0]/unidadesTotales) * element[1];
    }
    return precioMedio;
    
    
}

let lista = [[500,65],[300,60],[200,62]];
console.log(precioMedio(lista));