export interface IAlumno {
    nombre: string;
    apellido: string;
    fechaNacimiento: number;
    tipoDocumento: number;
    documento: number;
    comunidad: boolean;
    legajo: string;
    cursos: Array<number>;
}
