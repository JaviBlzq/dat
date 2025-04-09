'use strict'

let lista_menu = [
    ["Bebidas frias", "Cafe frio", "Zumo", "Refresco", "Botella de Agua"],
    ["Bebidas calientes", "Cafe caliente", "Infusiones", "Chocolate caliente"],
    ["Comida fria", "Sandwich", "Ensalada", "Snacks"],
    ["Comida caliente", "Tortilla", "Tostadas", "Plato de sopa"]
  ]
  
function addTable(lista){
    let row = document.querySelector("#row")
    let col = document.createElement("div")
    col.class = "col-sm-12"
    
    let table = document.createElement("table")
    table.class = "table table-bordered text-center"

    let trow = document.createElement("tr")
    let th = document.createElement("th")
    th.textContent = lista[0]
    table.append(th)
    for (let i = 1; i < lista.length; i++){
        let td = document.createElement("td")
        
        td.append(lista[i])
        trow.append(td)
        table.append(trow)
        
    }
    col.append(table)
    row.append(col)
}

function handle_list(){

}

addTable(lista_menu[0])
addTable(lista_menu[1])