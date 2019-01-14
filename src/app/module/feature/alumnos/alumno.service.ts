import { Injectable } from '@angular/core';
import { IAlumno } from '../../../interface/ialumno';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AlumnoService {

  private alumnos: Array<IAlumno> = [];

  constructor(private http: HttpClient) {
    let alumnos$ = http.get('https://demo3744158.mockable.io/alumnos');
    alumnos$.subscribe( (alumnos:Array<IAlumno>) => {
      this.alumnos.push(...alumnos);
    });
   }

  public findAll(): Array<IAlumno>{
    // TODO: Replace with RXjS
    return this.alumnos;
  }

}


/*
https://demo3744158.mockable.io/alumnos
[
    {
      "nombre": "Agustín",
      "apellido": "Scoccimarro",
      "fechaNacimiento": new Date(552798000000),
      "tipoDocumento": 0,
      "documento": 36091093,
      "comunidad": true,
      "legajo": "66266-5",
      "cursos": [22]
    },
    {
      "nombre": "Martín",
      "apellido": "Caruso",
      "fechaNacimiento": new Date(476798000000),
      "tipoDocumento": 0,
      "documento": 30289102,
      "comunidad": true,
      "legajo": "34719-5",
      "cursos": [30]
  },
  {
    "nombre": "Ignacio",
    "apellido": "Lambertini",
    "fechaNacimiento": new Date(572798000000),
    "tipoDocumento": 0,
    "documento": 34358164,
    "comunidad": true,
    "legajo": "99102-5",
    "cursos": [24, 30]
  }];

*/