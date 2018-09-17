import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AlumnoComponent } from './component/alumno/alumno.component';
import { CursoComponent } from './component/curso/curso.component';
import { DocenteComponent } from './component/docente/docente.component';


@NgModule({
  declarations: [
    AppComponent,
    AlumnoComponent,
    CursoComponent,
    DocenteComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
