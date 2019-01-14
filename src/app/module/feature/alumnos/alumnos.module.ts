import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AlumnoService } from './alumno.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlumnosComponent } from './alumnos/alumnos.component';
import { RoutesModule } from '../../routes/routes.module';
import { AlumnosListComponent } from './alumnos-list/alumnos-list.component';
import { AlumnoItemComponent } from './alumno-item/alumno-item.component';

@NgModule({
  imports: [
    CommonModule,
    RoutesModule,
    BrowserModule,
    HttpClientModule
  ],
  declarations: [
    AlumnosComponent,
    AlumnosListComponent,
    AlumnoItemComponent
  ],
  exports: [
    AlumnosComponent
  ],
  providers: [
    AlumnoService
  ]
})
export class AlumnosModule { }
