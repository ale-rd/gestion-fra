import { IAlumno } from "./ialumno";
import { Estado } from "../enum/estado.enum";

export interface ICurso {
    codigo: string;
    materia: string; // Esto debería ser otra clase
    alumnos: Array<IAlumno>;
    estado: Estado;
    estadoString: string;
}
