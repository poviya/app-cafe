import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { Component, HostListener, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { MenuSidebar } from 'src/app/interfaces';
import { AuthService } from 'src/app/services';
import { SearchService } from '../../../search/search.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  isBrowser: boolean;
  isServer: boolean;
  
  public getScreenWidth: any;
  public getScreenHeight: any;

  openMobil : boolean = false;
  openSidebar: boolean = true;
  menuSidebar: MenuSidebar[];
  menuSidebarModal: MenuSidebar[];

  constructor(
        public authService: AuthService,  
        private searchService: SearchService,
        @Inject(PLATFORM_ID) private platformId: object, ) { }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.isBrowser = true;
    }
    if (isPlatformServer(this.platformId)) {
      this.isServer = true;
    };

    this.onMenu();
    this.getScreenWidth = window.innerWidth;
    this.getScreenHeight = window.innerHeight;
    this.onWindowResize();
  }

  onMenu(): void {
    if(this.authService.user){
      this.menuSidebar = [
        // {
        //   link_name: "Dashboard",
        //   link: "/panel/dashboard",
        //   icon: "home",
        //   sub_menu: []
        // },
        {
          link_name: "Productos",
          link: "/panel/your-products",
          icon: "inventory_2",
          sub_menu: []
        },
        {
          link_name: "Categorías de Productos",
          link: "/panel/post-categories",
          icon: "toc",
          sub_menu: []
        },
        {
          link_name: "Cursos",
          link: "/panel/your-courses",
          icon: "school",
          sub_menu: []
        },
        {
          link_name: "Blogs",
          link: "/panel/your-blogs",
          icon: "rss_feed",
          sub_menu: []
        },
        {
          link_name: "Pagos",
          link: "/panel/payments",
          icon: "paid",
          sub_menu: []
        },
        // {
        //   link_name: "Perfil",
        //   link: `/${this.authService.user.username}`,
        //   icon: "face",
        //   sub_menu: []
        // } ,
        {
          link_name: "Ajustes",
          link: "/panel/setting",
          icon: "settings",
          sub_menu: []
        },
      ];
    }
  }

  showSubmenu(itemEl: HTMLElement) {
    itemEl.classList.toggle("showMenu");
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.getScreenWidth = window.innerWidth;
    this.getScreenHeight = window.innerHeight;
    if(this.getScreenWidth < 500 )
    {
      this.openMobil = true;
      this.searchService.device(false);
    } else if(this.getScreenWidth < 1100)
    {
      this.openMobil = false;
      this.openSidebar = false;
      this.searchService.device(false);
    } else {
      this.openMobil = false;
      this.openSidebar = true;
      this.searchService.device(false);
    }
  }

  logout() {

    this.authService.logout();
  }

  prinImages(images: any) 
  { 
    return images[0]['url'];
  };
  
}
