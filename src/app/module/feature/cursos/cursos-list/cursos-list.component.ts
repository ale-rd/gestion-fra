import { Component, OnInit, Input } from '@angular/core';
import { ICurso } from '../../../../interface/icurso';
import { Estado } from '../../../../enum/estado.enum';

@Component({
  selector: 'app-cursos-list',
  templateUrl: './cursos-list.component.html',
  styleUrls: ['./cursos-list.component.css']
})
export class CursosListComponent implements OnInit {

  @Input() cursos: Array<ICurso>;
  
  constructor() { }

  ngOnInit() {
  }

  public cambioEstado($event, curso: ICurso) {
    curso.estadoString = Estado[$event];
    curso.estado = <Estado>$event;
    console.log(Estado[curso.estado]);
   
  }

}
