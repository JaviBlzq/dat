'use strict'

function number_to_string(num){
    let str = String(num); //Nunca falla. Siempre se puede convertir
    

    return str;

}

function string_to_number(str){
    let num = Number(str);

    if (isNaN(num)){
        return null;
    }
    return num;

}

function string_to_boolan(str){
    let bool = Boolean(str);
    return bool;
}

console.log("Conversión de numero 123 a string: " + typeof(number_to_string(123)));
console.log("Conversión de 's' a string: " + typeof(number_to_string("s")));

console.log("Conversión de string 123 a numero: " + typeof(string_to_number("123")) + " valor: " + string_to_number("123"));
console.log("Conversión de string s a numero: " + typeof(string_to_number("s")) + " valor: " + string_to_number("s"));
console.log("Conversión de string 123 a numero: " + typeof(string_to_number(123)) + " valor: " + string_to_number(123));

console.log(string_to_boolan("True"));
console.log(string_to_boolan("s"));
console.log(string_to_boolan(123));
console.log(string_to_boolan(0));
console.log(string_to_boolan(""));
console.log(string_to_boolan(undefined));
console.log(string_to_boolan(null));
console.log(string_to_boolan(NaN));