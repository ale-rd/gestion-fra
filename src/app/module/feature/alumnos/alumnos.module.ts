import { SharedModule } from './../../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AlumnoService } from './alumno.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlumnosComponent } from './alumnos/alumnos.component';
import { RoutesModule } from '../../routes/routes.module';
import { AlumnosListComponent } from './alumnos-list/alumnos-list.component';
import { AlumnoItemComponent } from './alumno-item/alumno-item.component';
import { AlumnoNuevoComponent } from './alumno-nuevo/alumno-nuevo.component';
import { AlumnoFormComponent } from './alumno-form/alumno-form.component';

@NgModule({
  imports: [
    CommonModule,
    RoutesModule,
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    SharedModule
  ],
  declarations: [
    AlumnosComponent,
    AlumnosListComponent,
    AlumnoItemComponent,
    AlumnoNuevoComponent,
    AlumnoFormComponent
  ],
  exports: [
    AlumnosComponent
  ],
  providers: [
    AlumnoService
  ]
})
export class AlumnosModule { }
