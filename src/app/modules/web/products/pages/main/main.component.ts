import { DOCUMENT, isPlatformBrowser, isPlatformServer } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { PostCategory } from 'src/app/interfaces';
import { PostCategoryService, PostService } from 'src/app/services';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  isBrowser: boolean;
  isServer: boolean

  search: string | null = "";
  category: string | null = "";

  totalPages: any;
  currentPage = 0;
  limitPage = 5;

  postCategories: PostCategory[] = [];
  postCategory: PostCategory;

  data: any;
  posts: any = [];
  alSub: any;
  observer: any;
  loading = false;

  constructor(
    private meta: Meta,
    private title: Title,
    private activeRoute: ActivatedRoute,
    private readonly postCategoryService: PostCategoryService,
    private readonly postService: PostService,
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformId: object,
  ) {
    this.category = this.activeRoute.snapshot.queryParamMap.get('category');
    if (this.activeRoute.snapshot.queryParamMap.get('search'))
      this.search = this.activeRoute.snapshot.queryParamMap.get('search');

    if (isPlatformBrowser(this.platformId)) {
      this.isBrowser = true;
    }
    if (isPlatformServer(this.platformId)) {
      //localStorage.setItem('saludo', 'HOla');
    }

  }

  ngOnInit(): void {
    this.onScrollTop();
    this.findAllPostCategory();
    this.findAll();
  }

  findAllPostCategory(): void {
    const data = {

    };
    this.postCategoryService.findAll(data).subscribe(res => {
      if (res)
        this.postCategories = res;

    });
  }

  findAll() {

    this.data = {
      slugPostCategory: this.category,
      search: this.search,
      status: 'ACTIVE',
      type: 'ARTICLE'
    };
    this.loading = true;
    this.alSub = this.postService.findAll(this.data, this.limitPage, this.currentPage).subscribe(res => {
      this.totalPages = res.totalPages;
      res.data.forEach((element: any) => {
        this.posts.push(element);
      });
      if (res.postCategory) {
        this.postCategory = res.postCategory;
      }
      this.loading = false;
      this.headPage(this.postCategory);
    });
  }

  findAllPostInfinite($event: any) {
    this.data = {
      search: '',
      status: 'ACTIVE',
      type: 'ARTICLE'
    };
    this.currentPage = $event.currentPage;

    this.alSub = this.postService.findAllInfinite(this.data, this.limitPage, this.currentPage).subscribe(res => {
      res.data.forEach((element: any) => {
        this.posts.push(element);
      });
    });
  }

  onScrollTop() : void {
    this.document.documentElement.scrollTop = 0;
  }

  /************************ SEO  *****************/
  headPage(postCategory?: PostCategory) {
    let data;
    if(!postCategory)
    {
      data = {
        title: `Disfruta de nuestros productos cafe organico y miel de celccar`,
        description: "Tenemos café y miel para todos los gustos y para cada ocasión. ¿Pero cómo sabes cuál es tu café perfecto? Haz el test de CELCCAR para descubrirlo.",
        url: "https://celccar.com/products",
        image: 'https://celccar.com/assets/images/seo.jpg'
      }
    } else {
      data = {
        title: `Disfruta de ${postCategory!.name} `,
        description: `Tenemos ${postCategory!.name} para todos los gustos y para cada ocasión. ¿Pero cómo sabes cuál es tu café perfecto? Haz el test de CELCCAR para descubrirlo.`,
        url: `https://celccar.com/products?category=${postCategory.slug}`,
        image: 'https://celccar.com/assets/images/seo.jpg'
      }
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
