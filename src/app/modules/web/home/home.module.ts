import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomeRoutingModule } from './home-routing.module';
//import { MenuModule } from 'primeng/menu';

//import { PrimengModule } from 'src/app/common/primeng/primeng.module';

// COMPONENTS
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { MainComponent } from './pages/main/main.component';
import { PresentationComponent } from './pages/presentation/presentation.component';
import { FooterModule } from '../../footer/footer.module';
import { HeroComponent } from './pages/hero/hero.component';
import { FaqComponent } from './pages/faq/faq.component';
import { ServicesComponent } from './pages/services/services.component';
import { ShopComponent } from './pages/shop/shop.component';
import { CoursesComponent } from './pages/courses/courses.component';

@NgModule({
  declarations: [
    MainComponent,
    PresentationComponent,
    HeroComponent,
    FaqComponent,
    ServicesComponent,
    ShopComponent,
    CoursesComponent
      //ShowHomeComponent,
      //MainComponent,
      //MenuComponent,

      //ListAdsComponent,

    //CarouselComponent, CarouselItemDirective, CarouselItemElementDirective ,
  ],
  imports: [
    CommonModule,
    RouterModule,
    HomeRoutingModule,
    FormsModule, ReactiveFormsModule,
    HttpClientModule,
    TranslateModule,
    FooterModule,
  ]
})
export class HomeModule { }
