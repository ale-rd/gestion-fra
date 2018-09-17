import { ICurso } from "./icurso";

export interface IDocente {
    nombre: string;
    apellido: string;
    matricula: string;
    cursos: Array<ICurso>;
}
