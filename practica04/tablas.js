'use strict'

let lista_menu = [
    ["Bebidas frías", "Café frío", "Zumo", "Refresco", "Botella de agua"],
    ["Bebidas calientes", "Café caliente", "Infusiones", "Chocolate caliente"],
    ["Comida fría", "Sándwich", "Ensalada", "Snacks"],
    ["Comida caliente", "Tortilla", "Tostadas", "Plato de sopa"]
]

let orders = [];


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
        span.dataset.categoria = lista[0]
    
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
    return sinDuplicados
}

function arrayOfArrays(arr){
    let check = true;
    for (let array of arr){
        if (!Array.isArray(array)){
            check = false;
        }
    }
    return check;
}

function countUnits(arr1, elem){
    let found = false;

    if (arguments.length !== 2) {
        throw new Error("La función debe recibir dos parámetros")
    }
    if (!Array.isArray(arr1)){
        throw new Error("El primer elemento debe ser un array.");
    }

    if (!arrayOfArrays(arr1)){
        throw new Error("El array debe estar relleno de arrays.");
    }

    for (let miniArray of arr1) {
        if (miniArray.includes(elem)){
            return miniArray[0]
        }
    }
    return 1;
}

function add_orders(event) {
    let col = document.querySelector("#col-right")

    let categoria = event.target.dataset.categoria
    let producto = event.target.textContent
    let tabla_id = "orders-" + categoria.replaceAll(" ", "-")
    let table = document.querySelector("#" + tabla_id)

    // Lista general de pedidos acumulados
    orders.push(producto)
    let ordersNoDup = duplicados(orders) // Devuelve [[n, "producto"]]

    // Si no existe la tabla de pedidos de esa categoría, la creamos
    if (!table) {
        table = document.createElement("table")
        table.id = tabla_id
        table.classList.add("table", "table-bordered", "text-center", "mb-4")

        let headerRow = document.createElement("tr")
        let headerCell = document.createElement("th")
        headerCell.textContent = "Pedidos " + categoria
        headerRow.appendChild(headerCell)
        table.appendChild(headerRow)

        col.appendChild(table)
    }

    
    let encontrado = false
    let filas = table.querySelectorAll("tr")

    for (let i = 1; i < filas.length; i++) {
        let celda = filas[i].querySelector("td")
        let spanNombre = celda.querySelector(".producto-nombre")

        if (spanNombre && spanNombre.textContent === producto) {
            
            let spanUnidades = celda.querySelector(".producto-unidades")
            let cantidad = countUnits(ordersNoDup, producto)
            spanUnidades.textContent = cantidad + "x "
            encontrado = true
            break
        }
    }

    // Si no se encontró, se añade nueva fila
    if (!encontrado) {
        let trow = document.createElement("tr")
        let td = document.createElement("td")

        let spanUnits = document.createElement("span")
        let spanName = document.createElement("span")

        spanUnits.textContent = countUnits(ordersNoDup, producto) + "x "
        spanUnits.classList.add("producto-unidades", "fw-bold", "d-block", "text-decoration-none", "link-body-emphasis")

        spanName.textContent = producto
        spanName.classList.add("producto-nombre","d-block", "text-decoration-none", "link-body-emphasis")

        td.appendChild(spanUnits)
        td.appendChild(spanName)

        trow.appendChild(td)
        table.appendChild(trow)
    }
}


checkList(lista_menu)
