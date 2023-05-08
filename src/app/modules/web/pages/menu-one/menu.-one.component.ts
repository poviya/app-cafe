import { DOCUMENT, isPlatformBrowser, isPlatformServer } from '@angular/common';
import { Component, HostBinding, HostListener, Inject, Input, OnInit, PLATFORM_ID } from '@angular/core';
import { Country, User } from 'src/app/interfaces';
import { AppService, AuthService, ToolsService } from 'src/app/services';
import { Tools } from 'src/app/common/tools';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-one',
  templateUrl: './menu-one.component.html',
  styleUrls: ['./menu-one.component.scss'],
})
export class MenuOneComponent implements OnInit {

  isFixed: boolean = false;
  showMenu: boolean = false;
  
  isBrowser: boolean;

  isMenuOpen = false;

  constructor(
      private authService: AuthService,  
      public router: Router,
      @Inject(PLATFORM_ID) private platformId: Object,
  ) {
    if (isPlatformBrowser(this.platformId)) {
        this.isBrowser = true;
    }
    if (isPlatformServer(this.platformId)) {
    
    }
 }  

  ngOnInit(): void {
  }

  get user() {
    return  this.authService.user; 
  }

  onLogin(): void {
    this.router.navigate(['/auth/login']);
  }

  onRegister(): void {
    this.router.navigate(['/auth/register']);
  }

  onLogout(): void {

    this.authService.logout();
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.isFixed = scrollTop > 50;
    this.showMenu = scrollTop > 200;
  }

   toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  
  // @HostListener('document:click', ['$event'])
  // onDocumentClick(event: MouseEvent) {
  //   const menu = document.querySelector('.menu-mobile');
  //   if (menu && menu.contains(event.target as HTMLElement)) {
  //     return;
  //   }
  //   this.closeMenu();
  // }

  closeMenu() {
    if (this.isMenuOpen) {
      this.isMenuOpen = false;
    }
  }
}
