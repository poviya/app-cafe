import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterOneComponent } from './pages/footer-one/footer-one.component';
import { RouterModule } from '@angular/router';

// MODULES

// COMPONENTES

@NgModule({
  declarations: [
    FooterOneComponent
  ],
  imports: [
    CommonModule,
    FormsModule, 
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [
    FooterOneComponent
  ]
})
export class FooterModule { }
