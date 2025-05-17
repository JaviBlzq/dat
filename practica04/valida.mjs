'use strict';
import * as valida from '../practica03/valida.js';

function valida_passwd(event) {
    event.preventDefault(); 

    let passwd = document.querySelector("#inputPassword4").value;
    
    let resultado = valida.valida(passwd, 8, 1, 1, 1, 1, ',.-{}[]!"·$%&/()=?¿¡');
    
    let display = document.querySelector("#validacion");

    display.textContent = "";

    if (resultado === "ok") {
        display.textContent = "Contraseña válida.";
        display.classList.remove("text-danger");
        display.classList.add("text-success");
    } else {
        display.classList.remove("text-success");
        display.classList.add("text-danger");

        
        let listaErrores = document.createElement("ul");
        for (let error of resultado) {
            let li = document.createElement("li");
            li.textContent = error;
            listaErrores.appendChild(li);
        }
        display.appendChild(listaErrores);
    }
}

let form = document.querySelector("#login-form");
form.addEventListener("submit", valida_passwd);
