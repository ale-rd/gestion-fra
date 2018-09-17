import { IDocente } from "../interface/idocente";
import { ICurso } from "../interface/icurso";

export class Docente implements IDocente{
    nombre: string;
    apellido: string;
    matricula: string;
    cursos: Array<ICurso>;


	constructor(nombre: string, apellido: string, matricula: string, cursos: Array<ICurso>) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.matricula = matricula;
        this.cursos = cursos;

	}


}
