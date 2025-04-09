'use strict'


function addInTable(){
    let lista = [
        "café con leche",
        "croissant",
        "tostada con tomate",
        "zumo de naranja",
        "tortilla de patatas",
        "infusión de menta"
      ]
      
    let tabla = document.querySelector("#tabla")
    for (let i = 0; i < lista.length; i++){
        let row = document.createElement("tr")
        let td = document.createElement("td")

        td.append(lista[i])
        row.append(td)
        tabla.append(row)
    }
}

addInTable()