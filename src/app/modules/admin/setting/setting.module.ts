import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingRoutingModule } from './setting-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MainSettingComponent } from './pages/main-setting/main-setting.component';
import { SuscriptionModule } from './pages/suscription/suscription.module';
import { AccountModule } from './pages/account/account.module';
import { DocumentModule } from './pages/document/document.module';

@NgModule({
  declarations: [
    MainSettingComponent
  ],
  imports: [
    CommonModule,
    SettingRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    SuscriptionModule,
    AccountModule,
    DocumentModule
  ],
})
export class SettingModule { }
