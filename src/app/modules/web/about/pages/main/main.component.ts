import { DOCUMENT, isPlatformBrowser, isPlatformServer } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  isBrowser: boolean;
  isServer: boolean;
  
  constructor(
    private meta: Meta,
    private title: Title,
    @Inject(DOCUMENT) private document: Document,
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
    this.headPage();
  }

  onScrollTop() : void {
    this.document.documentElement.scrollTop = 0;
  }

  /************************ SEO  *****************/
  headPage() {
    let data;
    data = {
      title: `Disfruta de nuestros productos cafe organico y miel de celccar`,
      description: "Tenemos café y miel para todos los gustos y para cada ocasión. ¿Pero cómo sabes cuál es tu café perfecto? Haz el test de CELCCAR para descubrirlo.",
      url: "https://celccar.com/products",
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
