import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  exports: [
    CommonModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
  ],
})
export class AngularMaterialModule {}
