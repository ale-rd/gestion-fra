import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlumnosComponent } from './alumnos/alumnos.component';
import { RoutesModule } from '../../routes/routes.module';

@NgModule({
  imports: [
    CommonModule,
    RoutesModule
  ],
  declarations: [AlumnosComponent],
  exports: [AlumnosComponent]
})
export class AlumnosModule { }
