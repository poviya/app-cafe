import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { MainComponent } from './pages/main/main.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { ListComponent } from './pages/list/list.component';
import { FooterModule } from '../../footer/footer.module';


@NgModule({
  declarations: [
    MainComponent,
    CategoriesComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    FooterModule
  ]
})
export class ProductsModule { }
