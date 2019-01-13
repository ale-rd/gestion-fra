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
    nombre: "Martín",
    apellido: "Caruso",
    fechaNacimiento:new Date(476798000000),
    tipoDocumento: 0,
    documento: 30289102,
    comunidad: true,
    legajo: "34719-5",
    cursos: [30]
   }
 
  private docente: IDocente = {
    id: 0,
    nombre: "Fernando",
    apellido: "Arias" 
  };

  constructor(cursoService: CursoService){
    this.cursos = cursoService.findAll();
  }

  private cssClass: string;
}
