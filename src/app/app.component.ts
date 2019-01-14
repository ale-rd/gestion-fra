import { Component } from '@angular/core';
import { IDocente } from './interface/idocente';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Gestión FRA';
  
  private docente: IDocente = {
    id: 0,
    nombre: "Fernando",
    apellido: "Arias" 
  };

  constructor(){
  }

  private cssClass: string;
}
