import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookmarksRoutingModule } from './bookmarks-routing.module';
import { ShowComponent } from './pages/show/show.component';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListComponent } from './pages/list/list.component';
import { LoadingModule } from 'src/app/library/loading/loading.module';


@NgModule({
  declarations: [
    ShowComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    BookmarksRoutingModule,
    FormsModule, ReactiveFormsModule,
    TranslateModule,
    LoadingModule
  ],
  providers: [{ provide: 'isBrowser', useValue: true }],
})
export class BookmarksModule { }
