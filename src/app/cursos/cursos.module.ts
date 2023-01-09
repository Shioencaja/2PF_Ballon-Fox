import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosComponent } from './cursos.component';
import { SharedModule } from '../shared/shared.module';
import { MatTableModule } from '@angular/material/table';
import { AngularMaterialModule } from '../shared/modules/angular-material.module';

@NgModule({
  declarations: [CursosComponent],
  imports: [CommonModule, SharedModule, MatTableModule, AngularMaterialModule],
})
export class CursosModule {}
