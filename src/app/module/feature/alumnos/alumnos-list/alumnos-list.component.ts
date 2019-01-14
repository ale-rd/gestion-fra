import { IAlumno } from './../../../../interface/ialumno';
import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-alumnos-list',
  templateUrl: './alumnos-list.component.html',
  styleUrls: ['./alumnos-list.component.css']
})
export class AlumnosListComponent implements OnInit {

  @Input() alumnos: Array<IAlumno>;
  @Output() alumnoSeleccionado: EventEmitter<IAlumno> = new EventEmitter<IAlumno>();
  selectedRow: number;

  constructor() { 
  }

  ngOnInit() {
  }

  seleccionaralumno(unAlumno, index){
    this.selectedRow = index;
    this.alumnoSeleccionado.emit(unAlumno);
  }

}
