import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ICurso } from "../../../../interface/ICurso";
import { Estado } from '../../../../enum/estado.enum';

@Component({
  selector: 'app-cursos-list',
  templateUrl: './cursos-list.component.html',
  styleUrls: ['./cursos-list.component.css']
})
export class CursosListComponent implements OnInit {

  Estado = Estado;
  @Input() cursos: Array<ICurso>;
  @Output() cursoSeleccionado: EventEmitter<number> = new EventEmitter<number>();
  selectedRow:number;
  
  constructor() { 
  }

  ngOnInit() {
  }

  public seleccionarCurso(unCurso,index): void{
    this.selectedRow = index;
    this.cursoSeleccionado.emit(unCurso);

  }
}
