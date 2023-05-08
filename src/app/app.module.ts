import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Inject, NgModule, PLATFORM_ID, isDevMode, APP_INITIALIZER } from '@angular/core';
import { BrowserModule, TransferState } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TransferHttpCacheModule } from '@nguniversal/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { translateBrowserLoaderFactory } from './shared/translate-browser.loader';
//import { PushNotificationService } from './services/push-notification.service';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { MainComponent } from './modules/web/pages/main/main.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { ErrorModule } from './modules/error/error.module';
import { SpinnerModule } from './library/spinner/spinner.module';
import { FooterModule } from './modules/footer/footer.module';
import { CommonModule } from '@angular/common';
import { MenuOneComponent } from './modules/web/pages/menu-one/menu.-one.component';

const config: SocketIoConfig = { url: 'http://192.168.43.253:4000', options: {} };

export function loadCrucialData() {
  return function() {
    // or use UserService
    return delay(3000);
  }
}

export function delay(delay: number) {
  return function() {
    return new Promise(function(resolve) {
        setTimeout(resolve, delay);
    });
  }
}

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    MenuOneComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader, 
        useFactory: translateBrowserLoaderFactory,
        deps: [HttpClient, TransferState]
      }
    }),
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    HttpClientModule,
    BrowserAnimationsModule,
    TransferHttpCacheModule,
    SocketIoModule.forRoot(config),
    ErrorModule,
    SpinnerModule,
    FooterModule
  ],
  providers: [{
    provide: APP_INITIALIZER,
    multi: true,
    useFactory: loadCrucialData()
  }],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
