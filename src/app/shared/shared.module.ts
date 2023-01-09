import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavbarComponent } from './components/sidenavbar/sidenavbar.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { AngularMaterialModule } from './modules/angular-material.module';
import { RouterModule } from '@angular/router';
import { ConversorPipe } from '../conversor.pipe';

@NgModule({
  declarations: [SidenavbarComponent, ToolbarComponent, ConversorPipe],
  imports: [CommonModule, AngularMaterialModule, RouterModule],
  exports: [SidenavbarComponent, ToolbarComponent, ConversorPipe],
})
export class SharedModule {}
