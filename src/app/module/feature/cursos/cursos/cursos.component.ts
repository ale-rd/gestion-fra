import { Component, OnInit } from '@angular/core';
import { ICurso } from '../../../../interface/icurso';
import { Estado } from '../../../../enum/estado.enum';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  cursos: Array<ICurso>;

  constructor() {
    this.cursos = [
      {
        codigo: "k2122",
        materia: "Angular 6",
        alumnos: [],
        estado: Estado.Activo,
        estadoString: Estado[Estado.Activo]
      },
      {
        codigo: "k2122",
        materia: "Linux, viene de cursos-component",
        alumnos: [],
        estado: Estado.Inactivo,
        estadoString: Estado[Estado.Inactivo]
      }
    ]
   }

  ngOnInit() {
  }

}
