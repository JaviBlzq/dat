'use strict'

let coords;
let options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
};
let map;
let circle;
function success(pos) {
    coords = [pos.coords.latitude, pos.coords.longitude]
    map = L.map('map').setView(coords, 13);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
    let marker = L.marker(coords).addTo(map);
}
function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
};

navigator.geolocation.getCurrentPosition(success, error, options)

function saveUbi(pos){
    coords = [pos.coords.latitude, pos.coords.longitude];
    localStorage.setItem("latitude", pos.coords.latitude)
    localStorage.setItem("longitude",pos.coords.longitude)
    circle = L.circle(coords, {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: 50
    }).addTo(map);
    let btnOlvidar = document.querySelector("#olvidar");
    btnOlvidar.addEventListener("click", olvidarUbicacion)
    
}
function recordarUbicacion(event) {
    if (localStorage.getItem("latitude")){
        localStorage.removeItem("latitude")
        localStorage.removeItem("longitude")
    }
    navigator.geolocation.getCurrentPosition(saveUbi, error, options)
    

}

function olvidarUbicacion(event){
    localStorage.removeItem("latitude")
    localStorage.removeItem("longitude")
    map.removeLayer(circle)
    let btnOlvidar = document.querySelector("#olvidar");
    btnOlvidar.removeEventListener("click", olvidarUbicacion)

}

function checkButtons(){
    let btnRecordar = document.querySelector("#recordar");
    

    btnRecordar.addEventListener("click", recordarUbicacion)
    
}
checkButtons()