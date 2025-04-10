'use strict'

let lista_menu = [
    ["Bebidas frías", "Café frío", "Zumo", "Refresco", "Botella de agua"],
    ["Bebidas calientes", "Café caliente", "Infusiones", "Chocolate caliente"],
    ["Comida fría", "Sándwich", "Ensalada", "Snacks"],
    ["Comida caliente", "Tortilla", "Tostadas", "Plato de sopa"]
]



function addTable(lista){
    

    let col = document.querySelector("#col-left")

    let table = document.createElement("table")
    table.classList.add("table", "table-bordered", "text-center")

    let headerRow = document.createElement("tr")
    let headerCell = document.createElement("th")

    headerCell.textContent = lista[0]

    headerRow.appendChild(headerCell)
    table.appendChild(headerRow)

    for (let i = 1; i < lista.length; i++) {
        let trow = document.createElement("tr")
        let td = document.createElement("td")
    
        let span = document.createElement("span")
        span.textContent = lista[i]
    
        span.classList.add("d-block", "text-decoration-none", "link-body-emphasis")
        span.style.cursor = "pointer"
    
        span.addEventListener("click", add_orders);
    
        td.appendChild(span)
        trow.appendChild(td)
        table.appendChild(trow)
    }
    

    col.appendChild(table)
}

function checkList(lista){
    if(!Array.isArray(lista)){
        throw new Error("not a list")
    }
    if (lista.length < 1){
        throw new Error("list must be filled")
    }
    for (let i = 0; i< lista.length; i++){
        if(!Array.isArray(lista[i])){
            throw new Error("Is not a list of sublist. Index " + i + " is not a list" )
        }
        if (lista[i].length > 1){

            addTable(lista[i])
        } else {
            throw new Error("sublist muste be at least one category and one product")
        }
    }


}



function add_orders(event) {
    let col = document.querySelector("#col-right")
    let table = document.querySelector("#orders")

    if (!table) {
        table = document.createElement("table")
        table.id = "orders"
        table.classList.add("table", "table-bordered", "text-center")

        let headerRow = document.createElement("tr")
        let headerCell = document.createElement("th")
        headerCell.textContent = "Pedidos"
        headerRow.appendChild(headerCell)
        table.appendChild(headerRow)

        col.appendChild(table) 
    }

    let trow = document.createElement("tr")
    let td = document.createElement("td")
    td.textContent = event.target.textContent
    trow.appendChild(td)
    table.appendChild(trow)

}

checkList(lista_menu)
