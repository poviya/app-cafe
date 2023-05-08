import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TastingRoutingModule } from './tasting-routing.module';
import { MainComponent } from './pages/main/main.component';


@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    TastingRoutingModule
  ]
})
export class TastingModule { }
