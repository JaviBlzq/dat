'use strict'

let lista = ['tortilla', 'te', 'cafe', 'te', 'tostada','tostada', 'tostada']


function duplicados(lista){
    if (lista.length < 1){
        throw new Error("list must be greater than 0")
    }
    let sinDuplicados = [];

    for (let product of lista){
        let found = false
        

        for (let sublist of sinDuplicados){
            if (sublist[1] === product){
                sublist[0] += 1;
                found =true
            } 
            
        }
        
        if(!found) {
            sinDuplicados.push([1, product])
        }
    }
    console.log(sinDuplicados)
}

duplicados(lista)