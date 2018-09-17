import { Component } from '@angular/core';
import { ICurso } from './interface/icurso';
import { Curso } from './class/curso';
import { IAlumno } from './interface/ialumno';
import { Alumno } from './class/alumno';
import { IDocente } from './interface/idocente';
import { Docente } from './class/docente';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Gestión FRA';
  private curso: ICurso =  new Curso("K4012", "Angular", null);
  private alumno: IAlumno = new Alumno("Pepito", "Flores", "123433-1");
  private docente: IDocente = new Docente("Fernando", "Fernandez", "A222444-2", null);

  //private alumno: Alumno;
  //private docente: Docente;



}
