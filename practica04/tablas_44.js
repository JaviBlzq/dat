'use strict'

let lista_menu = [
    ["Bebidas frías", "Café frío", "Zumo", "Refresco", "Botella de agua"],
    ["Bebidas calientes", "Café caliente", "Infusiones", "Chocolate caliente"],
    ["Comida fría", "Sándwich", "Ensalada", "Snacks"],
    ["Comida caliente", "Tortilla", "Tostadas", "Plato de sopa"]
];

function addTable(lista){
    let row = document.querySelector("#row");

    let col = document.createElement("div");
    col.classList.add("col-sm-12", "mb-4");

    let table = document.createElement("table");
    table.classList.add("table", "table-bordered", "text-center");

    let headerRow = document.createElement("tr");
    let headerCell = document.createElement("th");

    headerCell.textContent = lista[0];

    headerRow.appendChild(headerCell);
    table.appendChild(headerRow);

    for (let i = 1; i < lista.length; i++) {
        let trow = document.createElement("tr");
        let td = document.createElement("td");
        td.textContent = lista[i];
        trow.appendChild(td);
        table.appendChild(trow);
    }

    col.appendChild(table);
    row.appendChild(col);
}

function checkList(lista){
    if(!Array.isArray(lista)){
        throw new Error("not a list");
    }
    if (lista.length < 1){
        throw new Error("list must be filled");
    }
    for (let i = 0; i< lista.length; i++){
        if(!Array.isArray(lista[i])){
            throw new Error("Is not a list of sublist. Index " + i + " is not a list" );
        }
        if (lista[i].length > 1){

            addTable(lista[i]);
        } else {
            throw new Error("sublist muste be at least one category and one product");
        }
    }


}
checkList(lista_menu);
