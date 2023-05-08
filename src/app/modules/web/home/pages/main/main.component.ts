import { DOCUMENT, isPlatformBrowser, isPlatformServer } from '@angular/common';
import { Component, HostListener, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { AuthService } from 'src/app/services';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  showButton = false;
  scrollHeight = 400;

  isBrowser: boolean;
  isServer: boolean;

  public getScreenWidth: any;
  public getScreenHeight: any;
  public openMobil : boolean = false;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private authService: AuthService,  
    @Inject(PLATFORM_ID) private platformId: Object,
    private meta: Meta,
    private title: Title,
) {
  this.getScreenWidth = window.innerWidth;
  this.getScreenHeight = window.innerHeight;
  this.onWindowResize();

  if (isPlatformBrowser(this.platformId)) {
      this.isBrowser = true;
  }
  if (isPlatformServer(this.platformId)) {
  
  }
}  

  ngOnInit(): void {
    this.onScrollTop();
    this.headPage();
  }

  // para saber si es mobil o pc 
  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.getScreenWidth = window.innerWidth;
    this.getScreenHeight = window.innerHeight;
    if(this.getScreenWidth < 500 )
    {
      this.openMobil = true;
    } else if(this.getScreenWidth < 1100)
    {
      this.openMobil = false;
    } else {
      this.openMobil = false;
    }
    // console.log('getScreenWidth', this.getScreenWidth);
    // console.log('getScreenHeight', this.getScreenHeight);
  }

  // para subir arriba 
  @HostListener('window:scroll')
  onWindowScroll(): void {
   const yOffset = window.pageYOffset;
   const scrollTop = this.document.documentElement.scrollTop;
   this.showButton = (yOffset || scrollTop) > this.scrollHeight;

  }

  onScrollTop() : void {
    this.document.documentElement.scrollTop = 0;
  }

  /************************ SEO  *****************/
  headPage() {
    let data;
    data = {
      title: `CENTRAL LOCAL DE COOPERATIVAS AGROPECUARIAS "CARANAVI" RL (CELCCAR)`,
      description: "Fortalecimiento de las unidades productivas familiares de café orgánico",
      url: "https://celccar.com",
      image: 'https://celccar.com/assets/images/seo.jpg'
    }

    this.title.setTitle(data.title);

    this.meta.updateTag({ name: "title", content: data.title! });
    this.meta.updateTag({ name: "description", content: data.description! });

    this.meta.updateTag({ property: "og:type", content: "website" });
    this.meta.updateTag({ property: "og:url", content: data.url });
    this.meta.updateTag({ property: "og:title", content: data.title! });
    this.meta.updateTag({ property: "og:description", content: data.description! });
    this.meta.updateTag({ property: 'og:image', content: data.image });

    this.meta.updateTag({ property: 'twitter:card', content: 'summary' });
    this.meta.updateTag({ property: 'twitter:url', content: data.url });
    //this.meta.addTag({property: 'twitter:site', content: '@AngularUniv'});
    this.meta.updateTag({ property: 'twitter:title', content: data.title! });
    this.meta.updateTag({ property: 'twitter:description', content: data.description! });
    this.meta.updateTag({ property: 'twitter:image', content: data.image });

  }
}
