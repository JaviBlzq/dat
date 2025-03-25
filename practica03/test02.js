'use strict'

function add_constant(num, constant){
    return num + constant;
}

function mod(divisor, dividendo){
    return divisor % dividendo;
}

function compararIgualdad(a, b) {
    return a == b;
}

function compararCiertoIgualdad(a, b) {
    return a === b;
}

console.log("Al numero 1 le sumamos la constante 1: " + add_constant(1, 1));
console.log("Al numero 1 le sumamos la constante 2: " + add_constant(1, 2));

console.log("El módulo de la división de 1 entre 1: " + mod(1, 1));
console.log("El módulo de la división de 47 entre 2: " +mod(47, 2));

let x = 2;
x++;
console.log("x vale " + x);

x+=add_constant(x, 3);
console.log("x vale su valor más la constante 3: " + x);
x=mod(x,3);
console.log("x vale el modulo de su valor entre 3: " + x);

console.log("Igualdad doble '=='");
console.log("'5' es igual a 5: " + compararIgualdad(5, '5'));  
console.log("0 es igual a false: " + compararIgualdad(0, false));

console.log("Igualdad triple '==='");
console.log("'5' es igual a 5: " + compararCiertoIgualdad(5, '5'));
console.log("0 es igual a false: " + compararCiertoIgualdad(0, false));
console.log("'hola' es igual a 'hola': " + compararCiertoIgualdad('hola', 'hola'));

