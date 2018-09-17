import { IAlumno } from "./ialumno";

export interface ICurso {
    codigo: string;
    materia: string; // Esto debería ser otra clase
    alumnos: Array<IAlumno>;
}
