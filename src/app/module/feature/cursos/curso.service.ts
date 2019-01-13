import { Injectable } from '@angular/core';
import { ICurso } from '../../../interface/icurso';
import { Estado } from '../../../enum/estado.enum';

@Injectable()
export class CursoService {
  
  private cursos: Array<ICurso> = [
    {
      id: 22,
      titulo: "Angular",
      fechaInicio: new Date(1549238400000),
      fechaFin: new Date(1551657600000),
      asistentes: [
        "Jimena Sanchez",
        "Joaquín Ferreyra",
        "Adolfo Carrasco",
        "Juan Ignacio López",
        "Nadia de Rosa"
      ],
      "profesor": {
        "id": 0,
        "nombre": "Fernando",
        "apellido": "Arias" 
      },
      "laboratorio": 7,
      "estado": Estado.Pendiente,
      "precio": 3000
    },
    {
      "id": 24,
      "titulo": "Linux",
      "fechaInicio": new Date(1549411200000),
      "fechaFin": new Date(1551830400000),
      "asistentes": [
        "Leandro Pereyra",
        "Daniela Cardozo",
        "Ayelén Montenegro"
      ],
      "profesor": { 
        "id": 6,
        "nombre": "Darío",
        "apellido": "Cuda"
      },
      "laboratorio": 5,
      "estado": Estado.Pendiente,
      "precio": 4500
    },
    {
      "id": 30,
      "titulo": "React",
      "fechaInicio": new Date(1549584000000),
      "fechaFin": new Date(1552003200000),
      "asistentes": [
        "Nicolas Martinez",
        "Adolfo Buzzo",
        "Nadia de Rosa"
      ],
      "profesor": {
        "id": 1,
        "nombre": "Ricardo",
        "apellido": "Aiello"
      },
      "laboratorio": 3,
      "estado": Estado.Pendiente,
      "precio": 2500
    }]
    
    constructor() { }
    
    public findAll(): Array<ICurso>{
      return this.cursos;
    }
    
    public findById(id: number): ICurso{
      return this.cursos.find(x => x.id == id);
    }
  }
  