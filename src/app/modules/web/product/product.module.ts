import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './pages/main/main.component';
import { ViewComponent } from './pages/view/view.component';
import { ProductRoutingModule } from './product-routing.module';
import { FooterModule } from '../../footer/footer.module';
import { CarouselMediaComponent } from './pages/carousel-media/carousel-media.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MainComponent,
    ViewComponent,
    CarouselMediaComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    FooterModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class ProductModule { }
