import { CursoService } from './../curso.service';
import { Component, OnInit } from '@angular/core';
import { ICurso } from "../../../../interface/ICurso";
import { Estado } from '../../../../enum/estado.enum';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  cursos: Array<ICurso>;
  cursoEnDetalle: ICurso;

  constructor(cursoService: CursoService) {
    this.cursos = cursoService.findAll();
   }

  ngOnInit() {
  }

  public mostrarDetalleCurso(cursoSelecionado: ICurso): void{
    this.cursoEnDetalle = cursoSelecionado;
  }

}
