import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateAgoPipe } from './date-ago.pipe';
import { NumberMoneyPipe } from './number-money.pipe';


@NgModule({
  declarations: [
    DateAgoPipe,
    NumberMoneyPipe,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DateAgoPipe,
    NumberMoneyPipe
  ]
})
export class PipesModule { }
