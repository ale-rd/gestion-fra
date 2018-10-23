import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AlumnoComponent } from './component/alumno/alumno.component';
import { DocenteComponent } from './component/docente/docente.component';
import { CursosModule } from './module/feature/cursos/cursos.module';
import { RoutesModule } from './module/routes/routes.module';
import { CursoItemComponent } from './component/curso-item/curso-item.component';


@NgModule({
  declarations: [
    AppComponent,
    AlumnoComponent,
    DocenteComponent,
    CursoItemComponent
  ],
  imports: [
    BrowserModule,
    CursosModule,
    RoutesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
