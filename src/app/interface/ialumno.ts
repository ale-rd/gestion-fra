export interface IAlumno {
    nombre: string;
    apellido: string;
    fechaNacimiento: Date;
    tipoDocumento: number;
    documento: number;
    comunidad: boolean;
    legajo: string;
    cursos: Array<number>;
}
