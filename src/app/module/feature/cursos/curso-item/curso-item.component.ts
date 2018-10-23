import { Component, OnInit, Input, Output, HostBinding, EventEmitter } from '@angular/core';
import { ICurso } from '../../../../interface/icurso';

@Component({
  selector: 'app-curso-item',
  templateUrl: './curso-item.component.html',
  styleUrls: ['./curso-item.component.css']
})
export class CursoItemComponent implements OnInit {

  @Input() curso: ICurso;
  @Output() cambioEstado: EventEmitter<number> = new EventEmitter<number>();
  @HostBinding('attr.class') cssClass = '';
  
    // ver interface DoCheck (cuando cambia la property de un objeto, y no el objeto en sí)
  
  constructor() { 
  }

  // Se ejecuta cada vez que se inicia el componente, después del constructor
  ngOnInit() {
    // Se puede acceder a los valores de los @Input

    // me suscribo a cambios en los parámetros.
    // this.sub = this.route.params.subscribe(params => {
    //   this.codigo = params['codigo']; 

    //   // acción a ejecutar luego de que hubo un cambio en los parámetros
    //   this.curso = this.cursoService.findByCodigo(this.codigo);
    // });    
  }

  ngOnDestroy() {
    // this.sub.unsubscribe();
  }

  onSelectChange(value: number){
    // TODO: Leer sobre $event
    // $event.target.value
    //        .target -> referencia
    //              .value -> valor que seleccionó el usuario
    console.log("onSelectChange " + value);

    //FIXME: hacer esto con @Output
    //       Cambiar clase con @HostBinding
    //this.curso.estadoString = Estado[value];

    // Los eventos emitidos solo los puede captar el componente padre.
    this.cambioEstado.emit(value);
    this.cssClass= this.cssClass+ 'panel panel-primary ';

  }

}
