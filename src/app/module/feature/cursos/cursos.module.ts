import { BrowserModule } from '@angular/platform-browser';
import { CursoItemComponent } from './curso-item/curso-item.component';
import { NgModule, ChangeDetectorRef } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CursoComponent } from './curso/curso.component';
import { CursosListComponent } from './cursos-list/cursos-list.component';
import { RoutesModule } from '../../routes/routes.module';
import { CursoService } from './curso.service';
import { CursosComponent } from './cursos/cursos.component';

@NgModule({
  imports: [
    CommonModule,
    RoutesModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    CursoComponent,
    CursoItemComponent,
    CursosListComponent,
    CursosComponent
  ],
  exports: [
    CursosComponent
  ],
  providers: [
    CursoService
  ]
})
export class CursosModule { }
