import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';

import { MainComponent } from './pages/main/main.component';

import { FooterModule } from 'src/app/modules/footer/footer.module';
import { ModalModule } from 'src/app/library/modal/modal.module';

@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ModalModule,
    FooterModule,
  ]
})
export class AdminModule { }
