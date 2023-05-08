import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { MainComponent } from './pages/main/main.component';
import { HistoryComponent } from './pages/history/history.component';


@NgModule({
  declarations: [
    MainComponent,
    HistoryComponent
  ],
  imports: [
    CommonModule,
    AboutRoutingModule
  ]
})
export class AboutModule { }
