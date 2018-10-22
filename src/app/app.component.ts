import { Component } from '@angular/core';
import { ICurso } from './interface/icurso';
import { IAlumno } from './interface/ialumno';
import { IDocente } from './interface/idocente';
import { Estado } from './enum/estado.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Gestión FRA';
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
  

  private alumno: IAlumno = {
    nombre: "Pepe",
    apellido: "Flores",
    legajo: "123433-1"
  }
  // private docente: IDocente = new Docente("Fernando", "Fernandez", "A222444-2", null);
  private docente: IDocente = {
    nombre: "Fernando",
    apellido: "Arias",
    matricula: "A22244-2",
    cursos: null
  }

  private cssClass: string;
}
