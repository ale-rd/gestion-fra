import { Component, OnInit, Input, Output, EventEmitter, HostBinding, OnDestroy } from '@angular/core';
import { ICurso } from '../../../../interface/icurso';
import { CursoService } from '../curso.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit, OnDestroy {

  // @Input() curso: ICurso;
  curso: ICurso;
  @Input() codigo: string;
  @Output() cambioEstado: EventEmitter<number> = new EventEmitter<number>();
  @HostBinding('attr.class') cssClass = '';
  
  private sub: any;

    // ver interface DoCheck (cuando cambia la property de un objeto, y no el objeto en sí)
  
  constructor(private cursoService: CursoService, private route: ActivatedRoute) { 
    // No se puede acceder a los valores de los @Input
    this.cursoService = cursoService;
  }

  // Se ejecuta cada vez que se inicia el componente, después del constructor
  ngOnInit() {
    // Se puede acceder a los valores de los @Input

    // me suscribo a cambios en los parámetros.
    this.sub = this.route.params.subscribe(params => {
      this.codigo = params['codigo']; 

      // acción a ejecutar luego de que hubo un cambio en los parámetros
      this.curso = this.cursoService.findByCodigo(this.codigo);
    });    
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
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
