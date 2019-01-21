import { TipoDocumento } from './../../../../enum/tipo-documento.enum';
import { FormGroup, FormControl, FormBuilder, Validators, ValidationErrors } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alumno-form',
  templateUrl: './alumno-form.component.html',
  styleUrls: ['./alumno-form.component.css']
})
export class AlumnoFormComponent implements OnInit {

  TipoDocumento = TipoDocumento;

  alumnoForm: FormGroup = this.formBuilder.group({
    nombre:['', [Validators.required]],
    apellido: ['', [Validators.required]],
    fechaNacimiento: ['', [Validators.required]],
    tipoDocumento: ['', [Validators.required]],
    comunidad: [false],
    legajo: [''],
    cursos: ['', [Validators.required]]
  });

  constructor(private formBuilder: FormBuilder) { }
    
  ngOnInit() {
  }

  onSubmitAlumnoForm(){
    // Puedo emitir un evento para elcomponente padre use el valor del form
    console.log(this.alumnoForm.value);
  }

  showErrors(){
    Object.keys(this.alumnoForm.controls).forEach(key => {
      const controlErrors: ValidationErrors = this.alumnoForm.get(key).errors;
      if(controlErrors){
        Object.keys(controlErrors).forEach(keyError => {
          console.log(key + ' ' + keyError);
        })
      }
    })
  }

}
