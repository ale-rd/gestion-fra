import { AlumnoService } from './../alumno.service';
import { IAlumno } from './../../../../interface/ialumno';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit {

  alumnos: Array<IAlumno>;
  alumnoEnDetalle: IAlumno;

  constructor(private alumnoService: AlumnoService) {
    this.alumnos = alumnoService.findAll();
   }

  ngOnInit() {
  }

  mostrarDetalleAlumno(unAlumno, index): void{
    this.alumnoEnDetalle = unAlumno;
  }



}
