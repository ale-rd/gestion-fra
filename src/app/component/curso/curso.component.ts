import { Component, OnInit, Input, Output, EventEmitter, HostBinding } from '@angular/core';
import { ICurso } from '../../interface/icurso';
import { Curso } from '../../class/curso';
import { Estado } from '../../enum/estado.enum';


@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {

  @Input() curso: ICurso;
  @Output() cambioEstado: EventEmitter<number> = new EventEmitter<number>();
  @HostBinding('attr.class') cssClass = '';

  // ver interface DoCheck (cuando cambia la property de un objeto, y no el objeto en sí)
  
  constructor() { 
    // No se puede acceder a los valores de los @Input
  }

  // Se ejecuta cada vez que se inicia el componente, después del constructor
  ngOnInit() {
    // Se puede acceder a los valores de los @Input
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
    let cssClassTmp = this.cssClass+ ' ';
    this.cssClass= cssClassTmp+ 'container';

  }

}
