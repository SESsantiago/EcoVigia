export function obtenerDronesDisponibles(flota) {
    let disponibles = [];
    let index = 0;

    for (let i = 0; i < flota.length; i++) {
        if (flota[i].estado === "en base" && flota[i].bateria > 20) {
            disponibles[index] = flota[i];
            index++;
        }
    }

    return disponibles;
}

export function dronesMantenimiento(flota) {
    let mantenimiento = [];
    let index = 0;

    for (let i = 0; i < flota.length; i++) {
        if (flota[i].bateria <= 20) {
            mantenimiento[index] = flota[i];
            index++;
        }
    }

    return mantenimiento;
}