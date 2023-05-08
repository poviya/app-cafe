import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { ShowComponent } from './pages/show/show.component';
import { MainComponent } from './pages/main/main.component';
import { HeaderComponent } from './pages/header/header.component';
import { ContainerComponent } from './pages/container/container.component';

@NgModule({
  declarations: [
    ShowComponent,
    MainComponent,
    HeaderComponent,
    ContainerComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
