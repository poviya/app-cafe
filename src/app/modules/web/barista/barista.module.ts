import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BaristaRoutingModule } from './barista-routing.module';
import { MainComponent } from './pages/main/main.component';


@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    BaristaRoutingModule
  ]
})
export class BaristaModule { }
