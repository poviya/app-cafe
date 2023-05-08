import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllRoutingModule } from './all-routing.module';
import { MainAllComponent } from './main-all/main-all.component';
import { ListModule } from '../list/list.module';


@NgModule({
  declarations: [
    MainAllComponent
  ],
  imports: [
    CommonModule,
    AllRoutingModule,
    ListModule
  ]
})
export class AllModule { }
