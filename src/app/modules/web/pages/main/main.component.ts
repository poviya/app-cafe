import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { Component, HostListener, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { AuthService } from 'src/app/services';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(
    public authService: AuthService, 
  ) { }

  ngOnInit(): void {
  }

  get user() {
    return this.authService.user;
  }

  logout() {

    this.authService.logout();
  }

}
