import { TipoDocumento } from './../enum/tipo-documento.enum';
export interface IAlumno {
    nombre: string;
    apellido: string;
    fechaNacimiento: number;
    tipoDocumento: number;
    comunidad: boolean;
    legajo: string;
    cursos: Array<number>;
}
