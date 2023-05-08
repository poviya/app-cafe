import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { YourCoursesRoutingModule } from './your-courses-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'src/app/library/modal';
import { LoadingModule } from 'src/app/library/loading/loading.module';
import { FooterModule } from '../../footer/footer.module';

import { MainComponent } from './pages/main/main.component';
import { HeaderComponent } from './pages/header/header.component';
import { SearchComponent } from './pages/search/search.component';
import { MenuComponent } from './pages/menu/menu.component';

@NgModule({
  declarations: [
    MainComponent,
    HeaderComponent,
    SearchComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    YourCoursesRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
    ModalModule,
    LoadingModule,
    FooterModule
  ]
})
export class YourCoursesModule { }