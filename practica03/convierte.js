'use strict';

function getNumber(str){
    let num = Number(str);
   
    return num;

}



function checkUnits(units){
    let unidades = ["m", "cm", "in", "yd"];
    return unidades.includes(units);
}

function convierte(meters, units){
    let errors = [];
    let error = false;
    let num = getNumber(meters);
    if (!checkUnits(units)){
        errors.push("Error: unidades no válidas");
        error = true;
    }
    if (!isNaN(num)){
        switch (units){
            case "m":
                num = num * 1;
                console.log(num);
                break;
            case "cm":
                num = num * 100;
                console.log(num);
                break;
            case "in":
                num = num / 0.0254;
                console.log(num);
                break;
            case "yd":
                num = num / 0.9144;
                console.log(num);
                break;
        }
    } else {
        errors.push("Error: no ha especificado un numero");
        error = true;
    }
    if (!error){
        return [String(num)];
    }else {
        return errors;
    }
}

console.log("Prueba 10 metros a metros:");
let returned = convierte(10, "m");
for (let i = 0; i < returned.length; i++){
    console.log(returned[i]);
}

console.log("Prueba 10 metros a pulgadas:")
returned = convierte(10, "in");
for (let i = 0; i < returned.length; i++){
    console.log(returned[i]);
}

console.log("Prueba 10 metros a yardas:")
returned = convierte(10, "yd");
for (let i = 0; i < returned.length; i++){
    console.log(returned[i]);
}

console.log("Prueba s metros a metros:")
returned = convierte("s", "m");
for (let i = 0; i < returned.length; i++){
    console.log(returned[i]);
}

console.log("Prueba s metros a s:")
returned = convierte("s", "s");
for (let i = 0; i < returned.length; i++){
    console.log(returned[i]);
}