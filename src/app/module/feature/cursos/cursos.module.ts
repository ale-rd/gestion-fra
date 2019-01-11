import { CursoItemComponent } from './curso-item/curso-item.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursoComponent } from './curso/curso.component';
import { CursosListComponent } from './cursos-list/cursos-list.component';
import { RoutesModule } from '../../routes/routes.module';
import { CursoService } from './curso.service';
import { CursosComponent } from './cursos/cursos.component';

@NgModule({
  imports: [
    CommonModule,
    RoutesModule
  ],
  declarations: [
    CursoComponent,
    CursoItemComponent,
    CursosListComponent,
    CursosComponent
  ],
  exports: [
    CursosComponent,
    CursoComponent,
    CursosListComponent,
    CursoItemComponent
  ],
  providers: [
    CursoService
  ]
})
export class CursosModule { }
