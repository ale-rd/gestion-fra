import { Injectable } from '@angular/core';
import { ICurso } from '../../../interface/icurso';
import { Estado } from '../../../enum/estado.enum';

@Injectable()
export class CursoService {

  private cursos: Array<ICurso> = [
    {
      codigo: "K4012",
      materia: "Angular",
      alumnos: null,
      estado: <Estado>Estado.Activo,
      estadoString: Estado[Estado.Activo]
    },
    {
      codigo: "K4013",
      materia: "CSS",
      alumnos: null,
      estado: <Estado>Estado.Inactivo,
      estadoString: Estado[Estado.Inactivo]
    }
  ]

  constructor() { }

  public findAll(): Array<ICurso>{
    return this.cursos;
  }

  public findByCodigo(codigo: string): ICurso{
    return this.cursos.find(x => x.codigo == codigo);
  }
}
