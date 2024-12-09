/* Se debe crear el control de los clientes */

//crear una funcion que registre los clientes con un nombre, fecha de inscripcion y una duracion de membresia 

//se debe crear un array para guardar los datos optenidos de los clientes 
const clientes =[]

export function registrarCliente(nombre, fechaInscripcion, duracion){
    const fechaExpiracion = calcularFechaExpiracion(fechaInscripcion, duracion);
    const cliente = {nombre, fechaInscripcion, fechaExpiracion};
    clientes.push(cliente);
    //return `El cliente &{nombre} a sido guardado con éxito.`
    mostrarClientesActivos();
}

// Crearemos la funcion para mostrar los clientes activos 
export function mostrarClientesActivos(){
    const resultados = document.getElementById("resultados");
    resultados.innerHTML = "<h2 class='text-xl font-bold'> Clientes Actios</h2>"
    clientes.forEach(cliente => {
        if (miembroActivo(cliente.fechaExpiracion)){
            resultados.innerHTML += `
            <p class="p-2 border rounded my-2"> 
            <strong>Nombre:</strong> ${cliente.nombre} <br>
            <strong>Inscripcion:</strong> ${cliente.fechaInscripcion} <br>
            <strong>Expira:</strong> ${cliente.fechaExpiracion.toLocaleDateString()}
            </p>`;
        }
    })
}
