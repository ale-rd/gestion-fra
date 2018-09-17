import { ICurso } from "../interface/icurso";
import { IAlumno } from "../interface/ialumno";

export class Curso implements ICurso{
    codigo: string;
    materia: string;
    alumnos: Array<IAlumno>;

	constructor( codigo: string, materia: string, alumnos: Array<IAlumno>) {
        this.codigo = codigo;
        this.materia = materia;
        this.alumnos = alumnos;
	}

}
