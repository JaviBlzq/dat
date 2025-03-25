'use strict';

function meterToCentimeter(meter){
    return meter * 100;
}

function meterToInch(meter){
    return meter / 0.0254;
}

function meterToYard(meter){
    return meter / 0.9144;
}

console.log("10 metros a centimetros: " + meterToCentimeter(10));
console.log("10 metros a pulgadas: " + meterToInch(10));
console.log("10 metros a yardas: " + meterToYard(10));

console.log("24.54 metros a centimetros: " + meterToCentimeter(24.54));
console.log("24.54 metros a pulgadas: " + meterToInch(24.54));
console.log("24.54 metros a yardas: " + meterToYard(24.54));

console.log("0 metros a centimetros: " + meterToCentimeter(0));
console.log("0 metros a pulgadas: " + meterToInch(0));
console.log("0 metros a yardas: " + meterToYard(0));