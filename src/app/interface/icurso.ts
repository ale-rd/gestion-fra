import { Estado } from './../enum/estado.enum';
import { IDocente } from "./idocente";

export interface ICurso {
    id: number;
    titulo: string;
    fechaInicio: number;
    fechaFin: number;
    asistentes: Array<string>;
    profesor: IDocente;
    laboratorio: number;
    estado: Estado;
    precio: number;
}
