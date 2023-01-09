import { Component } from '@angular/core';
import { CursosService } from '../services/cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css'],
})
export class CursosComponent {
  public titulo = 'Lista de Cursos';
  displayedColumns: string[] = ['curso', 'dificultad'];
  dataSource = this.servicio.obtenerCursos();
  constructor(private servicio: CursosService) {}
}
