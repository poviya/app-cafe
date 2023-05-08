import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// PRIMENG
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule} from 'primeng/inputtext';
import  {ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { RippleModule } from 'primeng/ripple';
import { TabViewModule } from 'primeng/tabview';
import { ToastModule } from 'primeng/toast';
import { EditorModule } from 'primeng/editor';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule, ReactiveFormsModule,
    DropdownModule,
    InputTextModule,
    ButtonModule,
    CarouselModule,
    RippleModule,
    TabViewModule,
    ToastModule,
    //EditorModule
  ],
  exports: [
    FormsModule, ReactiveFormsModule,
    DropdownModule,
    InputTextModule,
    ButtonModule,
    CarouselModule,
    RippleModule,
    TabViewModule,
    ToastModule,
    //EditorModule
  ]
})
export class PrimengModule { }
