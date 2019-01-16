import { CursoService } from './../../cursos/curso.service';
import { IAlumno } from './../../../../interface/ialumno';
import { Component, OnInit, Input, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';
import { ICurso } from '../../../../interface/icurso';

@Component({
  selector: 'app-alumno-item',
  templateUrl: './alumno-item.component.html',
  styleUrls: ['./alumno-item.component.css']
})
export class AlumnoItemComponent implements OnInit, OnChanges {

  @Input() alumno: IAlumno;
  cursos:Array<ICurso>;

  constructor(private cursoService: CursoService) { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges){
    let alumno: SimpleChange = changes.alumno;
    if(alumno.currentValue){
      this.cursos = this.cursoService.findByIds(alumno.currentValue.cursos);
    }
  }


}
