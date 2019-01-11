import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocentesComponent } from './docentes/docentes.component';
import { RoutesModule } from '../../routes/routes.module';

@NgModule({
  imports: [
    CommonModule,
    RoutesModule
  ],
  declarations: [DocentesComponent],
  exports: [DocentesComponent]
})
export class DocentesModule { }
