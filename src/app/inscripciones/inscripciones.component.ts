import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AlumnosService } from '../services/alumnos.service';

@Component({
  selector: 'app-inscripciones',
  templateUrl: './inscripciones.component.html',
  styleUrls: ['./inscripciones.component.css'],
})
export class InscripcionesComponent {
  public titulo = 'Inscripciones';
  onSubmit() {
    this.listaAlumnos.push({
      alumno: {
        nombres: this.formularioABM.value.nombres,
        apellidos: this.formularioABM.value.apellidos,
      },
      editar: false,
      asistencias: 1,
    });
    console.log(this.listaAlumnos);
  }
  listaAlumnos = this.servicio.obtenerAlumnos();
  constructor(private fb: FormBuilder, private servicio: AlumnosService) {}
  formularioABM = this.fb.group({
    nombres: '',
    apellidos: '',
  });
  ngOnInit(): void {}
}
