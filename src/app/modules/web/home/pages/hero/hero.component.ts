import { Component, HostListener, OnInit } from '@angular/core';

interface Slide {
  image: string;
}

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

  currentIndex = 0;
  slideWidth: number;
  transitionDuration = 0.5;
  autoSlideInterval = 3000; // change slide every 3 seconds
  autoSlideTimer: any;

  slides = [
   
    { image: './assets/images/hero-2.jpg' },
    //{ image: './assets/images/hero-1.jpg' },
    //{ image: './assets/images/hero-3.jpg' },
    { image: './assets/images/hero-1.jpg' },
    { image: './assets/images/hero-7.jpg' },
    { image: './assets/images/hero-8.jpg' }
  ];

  ngOnInit() {
    this.getScreen();
    console.log(this.slideWidth);
    setInterval(() => {
      this.next();
    }, this.autoSlideInterval); // Cambia de slide cada 5 segundos (5000ms)
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
    this.currentIndex = (this.currentIndex === 0) ? this.slides.length - 1 : this.currentIndex - 1;
    clearInterval(this.autoSlideTimer);
    this.autoSlide();

  }

  next() {
    this.currentIndex = (this.currentIndex === this.slides.length - 1) ? 0 : this.currentIndex + 1;
    clearInterval(this.autoSlideTimer);
    this.autoSlide();
  }

  autoSlide() {
    this.autoSlideTimer = setInterval(() => {
      this.currentIndex = (this.currentIndex === this.slides.length - 1) ? 0 : this.currentIndex + 1;
      console.log('currentIndex',this.currentIndex);
    }, this.autoSlideInterval);
  }

  getScreen() {
    this.slideWidth = window.innerWidth;
    if(this.slideWidth < 500 )
    {
      this.slideWidth = window.innerWidth - 0;
    } else if(this.slideWidth < 1100)
    {
      this.slideWidth = window.innerWidth - 5;
    } else {
      this.slideWidth = window.innerWidth - 5;
    }
  }
}
