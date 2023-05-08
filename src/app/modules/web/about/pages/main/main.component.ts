import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  isBrowser: boolean;
  isServer: boolean;
  
  constructor(
    @Inject(PLATFORM_ID) private platformId: object,
  ) {
    if (isPlatformBrowser(this.platformId)) {
      this.isBrowser = true;
    }
    if (isPlatformServer(this.platformId)) {
      //localStorage.setItem('saludo', 'HOla');
    }
   }

  ngOnInit(): void {
  }

}
