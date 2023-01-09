import { Component, OnInit } from '@angular/core';
import { AlumnosService } from '../services/alumnos.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css'],
})
export class AlumnosComponent implements OnInit {
  public titulo = 'Lista de Alumnos';
  public editar = false;
  displayedColumns: string[] = ['alumno', 'asistencias', 'acciones'];
  dataSource = this.servicio.obtenerAlumnos();
  constructor(private servicio: AlumnosService, private fb: FormBuilder) {}
  formularioEditar = this.fb.group({
    nombres: [''],
    apellidos: [''],
    asistencias: [''],
  });

  onclick() {
    this.editar ? (this.editar = false) : (this.editar = true);
    console.log(this.editar);
  }

  ngOnInit(): void {
    console.log(this.servicio.obtenerAlumnos());
  }
}
