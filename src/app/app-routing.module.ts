import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlumnosComponent } from './alumnos/alumnos.component';
import { CursosComponent } from './cursos/cursos.component';
import { InscripcionesComponent } from './inscripciones/inscripciones.component';

const routes: Routes = [
  { path: 'alumnos', component: AlumnosComponent },
  { path: 'cursos', component: CursosComponent },
  {
    path: 'inscripcion',
    component: InscripcionesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
