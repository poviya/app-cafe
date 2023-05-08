import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentsRoutingModule } from './payments-routing.module';
import { MainComponent } from './pages/main/main.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './pages/header/header.component';
import { SearchComponent } from './pages/search/search.component';
import { FooterModule } from '../../footer/footer.module';


@NgModule({
  declarations: [
    MainComponent,
    HeaderComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    PaymentsRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    FooterModule

  ]
})
export class PaymentsModule { }
