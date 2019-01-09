import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AlumnoComponent } from './component/alumno/alumno.component';
import { DocenteComponent } from './component/docente/docente.component';
import { CursosModule } from './module/feature/cursos/cursos.module';
import { RoutesModule } from './module/routes/routes.module';
import { SharedModule } from './module/shared/shared.module';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    AlumnoComponent,
    DocenteComponent
  ],
  imports: [
    BrowserModule,
    CursosModule,
    RoutesModule,
    SharedModule
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
