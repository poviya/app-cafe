import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseRoutingModule } from './course-routing.module';
import { MainComponent } from './pages/main/main.component';
import { FooterModule } from '../../footer/footer.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarouselMediaComponent } from './pages/carousel-media/carousel-media.component';
import { ViewComponent } from './pages/view/view.component';


@NgModule({
  declarations: [
    MainComponent,
    ViewComponent,
    CarouselMediaComponent
  ],
  imports: [
    CommonModule,
    CourseRoutingModule,
    FooterModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class CourseModule { }
