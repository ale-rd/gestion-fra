import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursoComponent } from './curso/curso.component';
import { CursosListComponent } from './cursos-list/cursos-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CursoComponent,
    CursosListComponent
  ],
  exports: [
    CursoComponent,
    CursosListComponent
  ]
})
export class CursosModule { }
