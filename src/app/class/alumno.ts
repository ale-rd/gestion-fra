import { IAlumno } from "../interface/ialumno";

export class Alumno implements IAlumno{
    nombre: string;
    apellido: string;
    legajo: string;


	constructor(nombre: string, apellido: string, legajo: string) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.legajo = legajo;
	}


}
