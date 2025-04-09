'use strict'

let omelette = document.querySelector('#omelette')
let coffee = document.querySelector('#cold_coffee')
let juice = document.querySelector('#juice')

omelette.addEventListener("click", handle_button)
coffee.addEventListener("click", handle_button)
juice.addEventListener("click", handle_button)

function handle_button(event){
    let paragraph = document.querySelector("#selected")
    let text = "Marchando el pedido de "
    let clicked = event.target.textContent
    text += clicked
    

    paragraph.textContent = text
    

}