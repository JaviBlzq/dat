'use strict'



let lista_menu = [
    ["Bebidas frias", "Cafe frio", "Zumo", "Refresco", "Botella de agua"],
    ["Bebidas calientes", "Cafe caliente", "Infusiones", "Chocolate caliente"],
    ["Comida fria", "Sandwich", "Ensalada", "Snacks"],
    ["Comida caliente", "Tortilla", "Tostadas", "Sopa"]
]
let menu_diff = {
    bebidas: ["Cafe frio", "Zumo", "Refresco", "Botella de agua", "Cafe caliente", "Infusiones", "Chocolate caliente"],
    comidas: ["Sandwich", "Ensalada", "Snacks", "Tortilla", "Tostadas", "Sopa"]
}

let orders = [];


function addTable(lista){
    

    let col = document.querySelector("#col-left")

    let table = document.createElement("table")
    table.classList.add("table", "table-bordered", "text-center")

    let headerRow = document.createElement("tr")
    let headerCell = document.createElement("th")
    let divHeader = document.createElement("div")
    let header = document.createElement("span")
    let imgHeader = document.createElement("img")
    imgHeader.src = "./images/resized/" + lista[0] + ".png"
    header.textContent = lista[0]


    divHeader.appendChild(imgHeader)
    divHeader.appendChild(header)
    headerCell.appendChild(divHeader)
    headerRow.appendChild(headerCell)
    table.appendChild(headerRow)

    for (let i = 1; i < lista.length; i++) {
        let trow = document.createElement("tr")
        let td = document.createElement("td")
        let div = document.createElement("div")
        let span = document.createElement("span")
        let img = document.createElement("img")
        img.src = "./images/resized/" + lista[i] + ".png"
        span.textContent = lista[i]

        for (let meal in menu_diff){
            if (menu_diff[meal].includes(lista[i])){
                table.classList.add(meal)
            }
        }
        
        span.style.pointerEvents = "none"
        img.style.pointerEvents = "none"
        div.style.cursor = "pointer"
        div.dataset.categoria = lista[0]
        
        
        
        div.addEventListener("click", add_orders);
        div.appendChild(img)
        div.appendChild(span)
        td.appendChild(div)
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
    console.log(event.target)
    let categoria = event.target.dataset.categoria
    let producto = event.target.textContent
    let tabla_id = "orders-" + categoria.replaceAll(" ", "-")
    let table = document.querySelector("#" + tabla_id)

    
    orders.push(producto)
    let ordersNoDup = duplicados(orders) 

    
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

    if (!encontrado) {
        let trow = document.createElement("tr");
        let td = document.createElement("td");

        let spanContainer = document.createElement("div");
        spanContainer.classList.add("d-flex",  "align-items-center", "gap-2");

        let spanUnits = document.createElement("span");
        let spanName = document.createElement("span");

        spanUnits.textContent = countUnits(ordersNoDup, producto) + "x ";
        spanUnits.classList.add("producto-unidades", "fw-bold", "text-decoration-none", "link-body-emphasis");

        spanName.textContent = producto;
        spanName.classList.add("producto-nombre", "text-decoration-none", "link-body-emphasis", "text-start");

        spanContainer.appendChild(spanUnits);
        spanContainer.appendChild(spanName);

        td.appendChild(spanContainer);

        trow.appendChild(td);
        table.appendChild(trow);

    }
}

function hideLunch(){
    let lunch = document.querySelectorAll(".comidas")
    lunch.forEach(element => {
        element.style.display = "none"
    });
}

function hideDrinks(){
    let drinks = document.querySelectorAll(".bebidas")
    drinks.forEach(element => {
        element.style.display= "none"
    });
}

function showLunch(event){
    let lunch = document.querySelectorAll(".comidas")
    lunch.forEach(element => {
        element.style.removeProperty("display");

    });
}

function showDrink(event){
    let drinks = document.querySelectorAll(".bebidas")
    drinks.forEach(element => {
        element.style.removeProperty("display");

    });
}

function toggleMeals(event) {
    
    if (event.target.textContent === "Ver Bebidas") {
        hideLunch()
        event.target.textContent = "Mostrar todo"
    } else if (event.target.textContent === "Ver Comidas") {
        hideDrinks()
        event.target.textContent = "Mostrar todo"
    } else {
        if (event.target.classList.contains("drink")) {
            showLunch()
            event.target.textContent = "Ver Bebidas"
        } else {
            showDrink()
            event.target.textContent = "Ver Comidas"
        }
    }


}


function addButtons(lista){
    let col = document.querySelector("#col-left")
    let div = document.createElement("div")
    div.classList.add("d-flex", "align-items-center", "gap-4")
    let buttonSwitch = document.createElement("button")

    buttonSwitch.classList.add("drink","btn", "btn-primary", "mb-4")
    buttonSwitch.textContent = "Ver Bebidas"

    let buttonSwitch2 = document.createElement("button")

    buttonSwitch2.classList.add("lunch","btn", "btn-primary", "mb-4")
    buttonSwitch2.textContent = "Ver Comidas"
    buttonSwitch.addEventListener("click", toggleMeals)
    buttonSwitch2.addEventListener("click", toggleMeals)

    
    div.appendChild(buttonSwitch)
    div.appendChild(buttonSwitch2)

    col.appendChild(div)
    
}
addButtons(menu_diff)
checkList(lista_menu)
