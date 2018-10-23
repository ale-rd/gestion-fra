import { Component, OnInit, Input, Output, EventEmitter, HostBinding, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ICurso } from '../../../../interface/icurso';
import { CursoService } from '../curso.service';
import { Estado } from '../../../../enum/estado.enum';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit, OnDestroy {

  // Recibo por param y lo busco en el service, para luego pasarlo a CursoItemComponent
  private codigo: string;
  private curso: ICurso;

  
  private sub: any;

 
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

    //   // acción a ejecutar luego de que hubo un cambio en los parámetros
      this.curso = this.cursoService.findByCodigo(this.codigo);
    });    
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  public cambioEstado($event) {
    this.curso.estadoString = Estado[$event];
    this.curso.estado = <Estado>$event;
    console.log(Estado[this.curso.estado]);
   
  }

}
