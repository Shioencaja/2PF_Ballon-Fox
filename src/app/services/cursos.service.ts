import { Injectable } from '@angular/core';
import { Cursos } from './cursos';

@Injectable({
  providedIn: 'root',
})
export class CursosService {
  constructor() {}
  public obtenerCursos(): Cursos[] {
    return [
      {
        nombre: 'Angular',
        dificultad: 'Alta',
      },
      {
        nombre: 'React',
        dificultad: 'Baja',
      },
      {
        nombre: 'Vue',
        dificultad: 'Baja',
      },
    ];
  }
}
