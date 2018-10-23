import { ICurso } from './../../interface/icurso';
import { Component, OnInit, Input, EventEmitter, Output, HostBinding } from '@angular/core';

@Component({
  selector: 'app-curso-item',
  templateUrl: './curso-item.component.html',
  styleUrls: ['./curso-item.component.css']
})
export class CursoItemComponent implements OnInit {

  @Input() curso: ICurso;;
  @Output() cambioEstado: EventEmitter<number> = new EventEmitter<number>();
  @HostBinding('attr.class') cssClass = '';
  constructor() { }

  ngOnInit() {
  }


  onSelectChange(value: number){
    // TODO: Leer sobre $event
    // $event.target.value
    //        .target -> referencia
    //              .value -> valor que seleccionó el usuario
    console.log(value);

    //FIXME: hacer esto con @Output
    //       Cambiar clase con @HostBinding
    //this.curso.estadoString = Estado[value];

    this.cambioEstado.emit(value);
    this.cssClass= this.cssClass+ 'panel panel-primary ';

  }

}
