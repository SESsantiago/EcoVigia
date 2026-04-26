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

export function asignarDrones(alertas, drones) {
    let asignaciones = [];
    let noAtendidas = [];

    let indexAsignacion = 0;
    let indexNo = 0;

    for (let i = 0; i < alertas.length; i++) {

        let aguaNecesaria = alertas[i].aguaRequerida;
        let dronesUsados = [];
        let indexDrones = 0;

        for (let j = 0; j < drones.length; j++) {

            if (aguaNecesaria > 0 && drones[j].agua > 0) {
                dronesUsados[indexDrones] = drones[j];
                indexDrones++;

                aguaNecesaria = aguaNecesaria - drones[j].agua;
            }
        }

        if (aguaNecesaria <= 0) {
            asignaciones[indexAsignacion] = {
                sector: alertas[i].sector,
                drones: dronesUsados
            };
            indexAsignacion++;
        } else {
            noAtendidas[indexNo] = alertas[i];
            indexNo++;
        }
    }

    return {
        asignaciones: asignaciones,
        noAtendidas: noAtendidas
    };
}