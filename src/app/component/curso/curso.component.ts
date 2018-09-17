import { Component, OnInit, Input } from '@angular/core';
import { ICurso } from '../../interface/icurso';
import { Curso } from '../../class/curso';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {

  @Input() curso: ICurso;
  
  constructor() { }

  ngOnInit() {
  }

}
