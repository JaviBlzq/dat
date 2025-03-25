'use strict'

function addTwo(a){
    return a + 2;
}

function completeVerse(a){
    return a + ", se hace camino al andar"
}

function changeValue(a){
    a = "Hola";
    return a;
}

let x = 1;

console.log("Demostración 1 paso por valor")
console.log("x vale: " + x);
console.log("Con la función addTwo() le sumamos dos a x, x vale: " + addTwo(x));
console.log("En el ámbito globa, x sigue valiendo: " + x);


let y = "Caminante no hay camino"
console.log("Demostración 2 paso por valor")
console.log("y vale: " + y);
console.log("Con la función completeVerse() completamos el verso y, y vale: " + completeVerse(y));
console.log("En el ámbito global, y sigue valiendo: " + y);

let z = undefined;
console.log("Demostración 3 paso por valor")
console.log("z vale: " + z);
console.log("Con la función changeValue() cambiamos el valor y, z vale: " + changeValue(z));
console.log("En el ámbito global, z sigue valiendo: " + z);