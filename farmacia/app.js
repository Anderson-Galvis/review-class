//importamos las funciones  que utilizaremos 
import { calcularFechaExpiracion, membreciaActiva } from "./gestorFechas.js";
import { registrarCliente, mostrarClientesActivos } from '/gestorClientes.js';

//configuracion de coneccion de todas las funciones

document.getElementById("formRegistrar").addEventListener("submit", function(event){
event.preventDefault(); 

//optenemos los valores de el formulario 
const nombre = document.getElementById("nombre").value;
const fechaInscripcion = document.getElementById("fechaInscripcion").value;
const duracion = document.getElementById("duracion").value;

if (nombre && fechaInscripcion && duracion > 0 ){
    registrarCliente(nombre, fechaInscripcion, duracion);
    this.requestFullscreen();
    alert("Cliente Registrado con éxito.");
}else {
    alert("Por Favor, completa todos los campos correctamente.");
}


})
