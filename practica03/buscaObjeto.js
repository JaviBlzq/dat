'use strict'

function creaEquipos(name, tier, team_color, country){
    let team = {
        name:name,
        division:tier,
        colors:team_color,
        pais:country,
    };

    return team;
}

function buscaObjeto(objetos, paisBuscado = "spain") {
    return objetos.filter(equipo => equipo.pais === paisBuscado);
}


let equipos = [];
equipos.push(creaEquipos('Real Madrid CF ', 1, ["blanco"], "spain"))
equipos.push(creaEquipos('CD Leganes ', 1, ["blanco", "azul"], "spain"))
equipos.push(creaEquipos('AD Alcorcon ', 2, ["amarillo"], "spain"))
equipos.push(creaEquipos('Manchester United ', 1, "rojo", "england"))


console.log(buscaObjeto(equipos, "england"));


