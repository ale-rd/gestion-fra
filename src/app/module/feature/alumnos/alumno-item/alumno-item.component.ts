import { IAlumno } from './../../../../interface/ialumno';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-alumno-item',
  templateUrl: './alumno-item.component.html',
  styleUrls: ['./alumno-item.component.css']
})
export class AlumnoItemComponent implements OnInit {

  @Input() alumno: IAlumno;

  constructor() { }

  ngOnInit() {
  }

}
