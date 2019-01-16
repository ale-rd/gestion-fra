import { AlumnosModule } from './module/feature/alumnos/alumnos.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CursosModule } from './module/feature/cursos/cursos.module';
import { RoutesModule } from './module/routes/routes.module';
import { SharedModule } from './module/shared/shared.module';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { DocentesModule } from './module/feature/docentes/docentes.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RoutesModule,
    SharedModule,
    CursosModule,
    AlumnosModule,
    DocentesModule
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
