import { AlumnoNuevoComponent } from './../feature/alumnos/alumno-nuevo/alumno-nuevo.component';
import { AppComponent } from './../../app.component';
import { CursosComponent } from './../feature/cursos/cursos/cursos.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

// Otra estrategia de ruteo: Agrega /#/ a la URL. Sirve por si no tenemos permiso para definir las politicas del servidor
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { AlumnosComponent } from '../feature/alumnos/alumnos/alumnos.component';
import { DocentesComponent } from '../feature/docentes/docentes/docentes.component';

const ROUTES: Routes = [
  // { path: "", redirectTo: "home", pathMatch: "full" },
  // { path: "home", component: AppComponent },
  { path: "cursos", component: CursosComponent },
  { path: "alumnos", component: AlumnosComponent },
  { path: "alumno", component: AlumnoNuevoComponent},
  { path: "docentes", component: DocentesComponent }
  // {path: "*", redirectTo: "home", pathMatch: "full"}
  // { path: "curso/:codigo", component: CursoComponent },
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot( ROUTES)
  ],
  exports: [
    RouterModule
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  }],
  declarations: []
})
export class RoutesModule { }
