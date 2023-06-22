/*
ejercicio 2 Crear una clase y una interfaz para representar una lista de tareas 
crea una clase llamada ListaTareas que tenga un arreglo privado de tareas (tareas) y los siguientes métodos:
agregarTarea(tarea: Tarea): void: Agrega una nueva tarea al arreglo tareas.
marcarTareaCompleta(id: number): void: Marca una tarea como completada, buscándola por su id y actualizando el valor de la propiedad completada a true.
listarTareas(): void: Muestra por consola la lista de tareas, incluyendo su id, descripción y estado de completado
Presentar en un repositorio de GitHub en grupo de no mas de 4 personas
En el repositorio debe figurar la actividad de cada integrante del grupo
*/

class ListaTareas {
    private tareas: Tarea[];

    constructor() {
        this.tareas = [];
    }

    agregarTarea(tarea: Tarea): void {
        this.tareas.push(tarea);
    }

    marcarTareaCompleta(id: number): void {
        const tarea = this.tareas.find(tarea => tarea.id === id);
        if (tarea) {
            tarea.completada = true;
        }
    }

    listarTareas(): void {
        this.tareas.forEach(tarea => {
            console.log(`${tarea.id} - ${tarea.descripcion} - Completada: ${tarea.completada}`);
        });
    }
}

interface Tarea {
    id: number;
    descripcion: string;
    completada: boolean;
}