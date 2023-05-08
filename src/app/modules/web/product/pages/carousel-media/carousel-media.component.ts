import { AfterViewInit, Component, ElementRef, HostListener, Input, OnInit, ViewChild } from '@angular/core';
import { PostMedia } from 'src/app/interfaces';

interface Slide {
  image: string;
}

@Component({
  selector: 'app-carousel-media',
  templateUrl: './carousel-media.component.html',
  styleUrls: ['./carousel-media.component.scss']
})
export class CarouselMediaComponent implements OnInit, AfterViewInit  {

  currentIndex = 0;
  slideWidth: number;
  transitionDuration = 0.5;
  autoSlideInterval = 3000; // change slide every 3 seconds
  autoSlideTimer: any;

  document: Document;
  
  @ViewChild('main')
  main: ElementRef;
  
  @Input() slides: PostMedia[] | undefined = [];

  ngOnInit() {
    this.slideWidth = 400;//window.innerWidth;
    //console.log(this.slideWidth);
    setInterval(() => {
      this.next();
    }, this.autoSlideInterval); // Cambia de slide cada 5 segundos (5000ms)
  }
  
  ngAfterViewInit() { //Recién en este punto tendrás acceso al valor
   this.getScreen();
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.getScreen();
    console.log(this.slideWidth);
  }

  jumpToSlide(index: number) {
    this.currentIndex = index;
    clearInterval(this.autoSlideTimer);
    this.autoSlide();
  }

  prev() {
    this.currentIndex = (this.currentIndex === 0) ? this.slides!.length - 1 : this.currentIndex - 1;
    clearInterval(this.autoSlideTimer);
    this.autoSlide();

  }

  next() {
    this.currentIndex = (this.currentIndex === this.slides!.length - 1) ? 0 : this.currentIndex + 1;
    clearInterval(this.autoSlideTimer);
    this.autoSlide();
  }

  autoSlide() {
    this.autoSlideTimer = setInterval(() => {
      this.currentIndex = (this.currentIndex === this.slides!.length - 1) ? 0 : this.currentIndex + 1;
    }, this.autoSlideInterval);
  }

  getScreen() {
    this.slideWidth =  this.main.nativeElement.offsetWidth;
    // if(this.slideWidth < 500 )
    // {
    //   this.slideWidth = window.innerWidth - 0;
    // } else if(this.slideWidth < 1100)
    // {
    //   this.slideWidth = window.innerWidth - 5;
    // } else {
    //   this.slideWidth = window.innerWidth - 5;
    // }
  }

}

