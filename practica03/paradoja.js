'use strict'

function add_date(dates) {
    let new_day = Math.floor(Math.random() * 365);
    return dates.push(new_day);
}

function cuenta_iguales(date) {
    let fechas = {};

    for (let day of date) {
        if (fechas[day]) {
            return true;
        }
        fechas[day] = true;
    }

    return false;
}

function diaDelAno(numero) {
    const meses = [
        { nombre: "enero", dias: 31 },
        { nombre: "febrero", dias: 28 },
        { nombre: "marzo", dias: 31 },
        { nombre: "abril", dias: 30 },
        { nombre: "mayo", dias: 31 },
        { nombre: "junio", dias: 30 },
        { nombre: "julio", dias: 31 },
        { nombre: "agosto", dias: 31 },
        { nombre: "septiembre", dias: 30 },
        { nombre: "octubre", dias: 31 },
        { nombre: "noviembre", dias: 30 },
        { nombre: "diciembre", dias: 31 }
    ];

    
    for (let mes of meses) {
        if (numero <= mes.dias) {
            return `${numero} de ${mes.nombre}`;
        }
        numero -= mes.dias;
    }
}

function generate_lists() {
    let dates = [];
    let count = 0;

    while (true) {
        add_date(dates);
        count++;
        if (cuenta_iguales(dates)) {
            break;
        }
    }

    console.log("Fechas generadas:");
    for (let d of dates) {
        console.log(diaDelAño(d));
    }

    console.log("Numero de fechas generadas: " + count);
    return ;
}

generate_lists();
