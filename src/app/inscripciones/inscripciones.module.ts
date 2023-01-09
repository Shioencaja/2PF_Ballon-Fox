import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InscripcionesComponent } from './inscripciones.component';
import { SharedModule } from '../shared/shared.module';
import { AngularMaterialModule } from '../shared/modules/angular-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [InscripcionesComponent],
  imports: [
    CommonModule,
    SharedModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class InscripcionesModule {}
