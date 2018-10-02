import { ICurso } from "../interface/icurso";
import { IAlumno } from "../interface/ialumno";
import { Estado } from "../enum/estado.enum";

export class Curso implements ICurso{
    estado: Estado;
    estadoString: string;
    codigo: string;
    materia: string;
    alumnos: Array<IAlumno>;

	constructor( codigo: string, materia: string, alumnos: Array<IAlumno>, estado: Estado) {
        this.codigo = codigo;
        this.materia = materia;
        this.alumnos = alumnos;
        this.estado = estado;
        this.estadoString = Estado[estado];
    }
}
