'use strict'

const NUMBER_THRESHOLD = 100;

function isEven(num){
    return num % 2 === 0
}


function checkParity(num, parity){
    if (parity(num)){
        console.log(num + " is even");
    } else {
        console.log(num + " is odd");
    }
}

let x=4;
let randomNumber = Math.floor(Math.random() * NUMBER_THRESHOLD);

console.log((y => {
    return y * y;
})(x));


console.log(isEven((y => y * y)(x)));

checkParity(randomNumber, x => {
    if (isEven(x)) {
        return true;
    } else {
        return false;
    }
})