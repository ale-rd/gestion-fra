import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CursoComponent } from '../feature/cursos/curso/curso.component';

// Otra estrategia de ruteo: Agrega /#/ a la URL. Sirve por si no tenemos permiso para definir las politicas del servidor
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

const ROUTES: Routes = [
  // {path: "", redirectTo: "home", pathMatch: "full"},
  {path: "curso/:codigo", component: CursoComponent}
  // {path: "*", redirectTo: "home", pathMatch: "full"}
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
