import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlumnosComponent } from './alumnos.component';
import { MatTableModule } from '@angular/material/table';
import { AngularMaterialModule } from '../shared/modules/angular-material.module';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AlumnosComponent],
  imports: [
    CommonModule,
    SharedModule,
    MatTableModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class AlumnosModule {}
