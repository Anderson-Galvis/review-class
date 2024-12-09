// Funcion para calcular la fecha de expiracion sumando los dias 
export function calcularFechaExpiracion(fechaInicio, duracionDias){
    const fecha = new Date(fechaInicio);
    fecha.setDate(fecha.getDate() + Number(duracionDias));
    return fecha;
}


/*Se necesita verificar si el usuario tiene su suscripcion vigente, para esto se creara una funcion */
export function membreciaActiva(fehcaExpiracion){
    const fechaActual = new Date();
    return fechaActual <= fehcaExpiracion;
}


