import { DOCUMENT, isPlatformBrowser, isPlatformServer } from '@angular/common';
import { Component, HostListener, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Course, Post } from 'src/app/interfaces';
import { CourseService, PostService } from 'src/app/services';

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

  slug: string | null;
  course: Course;
  
  constructor(
    private meta: Meta,
    private title: Title,
    private readonly courseService: CourseService,
    private activatedRoute: ActivatedRoute,
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformId: object,
  ) {
    this.slug = this.activatedRoute.snapshot.paramMap.get('slug');
    if (isPlatformBrowser(this.platformId)) {
      this.isBrowser = true;
    }
    if (isPlatformServer(this.platformId)) {
    }
  }

  ngOnInit(): void {
    this.onScrollTop();
    this.findOneSlug();
  }

  findOneSlug(): void {

    this.courseService.findOneSlug(this.slug).subscribe(res => { console.log(res);
      if(res) 
      this.course = res;
      this.headPage(res);
    });
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
   headPage(course?: Course) {
    let data;
    data = {
      title: `${course?.title} `,
      description: `${course!.description}`,
      url: `https://celccar.com/product/${course!.slug}`,
      image: `${course!.PostMedia![0].url}`
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
