import { Injectable } from '@angular/core';
import { Alumno } from './alumno';

@Injectable({
  providedIn: 'root',
})
export class AlumnosService {
  public obtenerAlumnos(): Alumno[] {
    return [
      {
        alumno: { apellidos: 'Ballon Fox', nombres: 'Gabriel' },
        editar: false,
        asistencias: 8,
      },
      {
        alumno: { apellidos: 'Ballon Fox', nombres: 'Camila' },
        editar: false,
        asistencias: 7,
      },
      {
        alumno: { apellidos: 'Ballon Fox', nombres: 'Julia' },
        editar: false,
        asistencias: 6,
      },
      {
        alumno: { apellidos: 'Fox Joo', nombres: 'Cecilia' },
        editar: false,
        asistencias: 9,
      },
      {
        alumno: { apellidos: 'Ballon Soria', nombres: 'Gabriel' },
        editar: false,
        asistencias: 8,
      },
      {
        alumno: { apellidos: 'Alca Montoya', nombres: 'Aylin' },
        editar: false,
        asistencias: 9,
      },
      {
        alumno: { apellidos: 'Macalupú', nombres: 'Valeria' },
        editar: false,
        asistencias: 7,
      },
      {
        alumno: { apellidos: 'Gonzales', nombres: 'Dana' },
        editar: false,
        asistencias: 6,
      },
    ];
  }

  constructor() {}
}
