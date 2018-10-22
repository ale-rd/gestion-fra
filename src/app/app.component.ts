import { Component } from '@angular/core';
import { ICurso } from './interface/icurso';
import { IAlumno } from './interface/ialumno';
import { IDocente } from './interface/idocente';
import { CursoService } from './module/feature/cursos/curso.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Gestión FRA';
  private cursos: Array<ICurso>;
  private alumno: IAlumno = {
    nombre: "Pepe",
    apellido: "Flores",
    legajo: "123433-1"
  }
 
  private docente: IDocente = {
    nombre: "Fernando",
    apellido: "Arias",
    matricula: "A22244-2",
    cursos: null
  }

  constructor(cursoService: CursoService){
    this.cursos = cursoService.findAll();
  }

  private cssClass: string;
}
