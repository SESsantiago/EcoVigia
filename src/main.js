import { flota, alertas } from "./data.js";
import { obtenerDronesDisponibles, dronesMantenimiento, asignarDrones } from "./logic.js";

// 1. Obtener drones disponibles
const disponibles = obtenerDronesDisponibles(flota);

// 2. Obtener drones en mantenimiento
const mantenimiento = dronesMantenimiento(flota);

// 3. Asignar drones
const resultado = asignarDrones(alertas, disponibles);

// 4. Mostrar resultados
console.log("=== DRONES DISPONIBLES ===");
console.table(disponibles);

console.log("=== ASIGNACIONES ===");
console.table(resultado.asignaciones);

console.log("=== ALERTAS NO ATENDIDAS ===");
console.table(resultado.noAtendidas);

console.log("=== DRONES EN MANTENIMIENTO ===");
console.table(mantenimiento);