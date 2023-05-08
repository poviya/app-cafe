import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// MODULES

// COMPONENTES
import { ShowSearchComponent } from './pages/show-search/show-search.component';
import { SearchRigthComponent } from './pages/search-rigth/search-rigth.component';
import { SearchCenterComponent } from './pages/search-center/search-center.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    ShowSearchComponent,
    SearchRigthComponent,
    SearchCenterComponent
  ],
  imports: [
    CommonModule,
    FormsModule, 
    ReactiveFormsModule,
    TranslateModule,
  ],
  exports: [
    ShowSearchComponent,
    SearchRigthComponent,
    SearchCenterComponent,
    FormsModule, 
    ReactiveFormsModule
  ]
})
export class SearchModule { }
