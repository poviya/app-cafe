import { animate, style, transition, trigger, AnimationEvent } from '@angular/animations';
import { AfterViewInit, Component, ElementRef, Input, OnInit } from '@angular/core';
import { PostMedia } from 'src/app/interfaces';

@Component({
  selector: 'app-post-media',
  templateUrl: './post-media.component.html',
  styleUrls: ['./post-media.component.scss'],
  animations: [
    trigger('animation', [
      transition('void => visible', [
        style({transform: 'scale(0.5)'}),
        animate('150ms', style({transform: 'scale(1)'}))
      ]),
      transition('void => visible', [
        style({transform: 'scale(1)'}),
        animate('150ms', style({transform: 'scale(0.5)'}))
      ]),
    ]),
    trigger('animation2', [
      transition(':leave', [
        style({opacity: 1}),
        animate('50ms', style({opacity: 0.8}))
      ])
    ])
  ]
})
export class PostMediaComponent implements OnInit {

  @Input() postMedia: PostMedia[] | undefined;

  showCount = false;
  private element: any;
  previewImage = false;
  showMask = false;
  currentLinghtboxImage: any;
  currentIndex = 0;
  controls = true;
  totalImageCount = 0;

  src: string = 'https://images3.alphacoders.com/994/thumbbig-994703.webp';
  public srcPreload: string =  './assets/images/image-preload.png';
  public srcError: string = './assets/images/image-preload.png';
  public imgSrc: string;
  private tmpImage: HTMLImageElement;

  countClock: number = 0;
  clock: any;
  clockHandle: any;

  constructor( private el: ElementRef,) { }

  ngOnInit(): void {
    this.onPreviewImage(0);

    // console.log(this.src);
    //     this.imgSrc = this.srcPreload;
    //     if (this.tmpImage) {
    //         this.tmpImage.onload = null;
    //     }

    //     let loaded = () => { 
    //         this.imgSrc = this.src;
    //     };

    //     let imgError = () => {
    //         console.error('Error al cargar la imagen', this.imgSrc);
    //         this.imgSrc = this.srcError;
    //     };

    //     this.tmpImage = new Image();
    //     this.tmpImage.onload = loaded;
    //     this.tmpImage.onerror = imgError;
    //     this.tmpImage.src = this.src;

  }

  /****** lightbox */
  onPreviewImage(index: number) : void
  {

    if(this.postMedia)
    {
      // show immage
      this.showMask = true;
      this.previewImage = true;
      this.currentIndex = index;
      this.currentLinghtboxImage = this.postMedia![index].url;
      this.showCount = true;
      this.totalImageCount = this.postMedia!.length;

      if(this.postMedia![index].type == 'image') {
        this.loaderImage(index);
      }
    }
  }

  onAnimationEnd(event: AnimationEvent )
  {
    if(event.toState == 'void') 
    {
      this.showMask = false;
    }
  }

  onClosePreview()
  {
    this.previewImage = false;
  }

  next(): void {
    this.currentLinghtboxImage = '';
    this.previewImage = false;
    this.currentIndex = this.currentIndex + 1;
    if(this.currentIndex > this.postMedia!.length - 1)
    {
      this.currentIndex = 0;
    }

    this.currentLinghtboxImage = this.postMedia![this.currentIndex].url;
    this.previewImage = true;

    if(this.postMedia![this.currentIndex].type == 'image') {
      this.loaderImage(this.currentIndex);
    }
  }

  prev() : void {
    this.currentLinghtboxImage = '';
    this.previewImage = false;
    this.currentIndex = this.currentIndex - 1;
    if(this.currentIndex < 0)
    {
      this.currentIndex = this.postMedia!.length - 1;
    }

    this.currentLinghtboxImage = this.postMedia![this.currentIndex].url;
    this.previewImage = true;

    if(this.postMedia![this.currentIndex].type == 'image') {
      this.loaderImage(this.currentIndex);
    }
  }

  loaderImage(index: number) {
    this.src = this.postMedia![index].url;
    // preload image
    // console.log(this.src);
    this.imgSrc = this.srcPreload;
    if (this.tmpImage) {
        this.tmpImage.onload = null;
    }

    let loaded = () => { 
        this.imgSrc = this.src;
    };

    let imgError = () => {
        console.error('Error al cargar la imagen', this.imgSrc);
        this.imgSrc = this.srcError;
    };

    this.tmpImage = new Image();
    this.tmpImage.onload = loaded;
    this.tmpImage.onerror = imgError;
    this.tmpImage.src = this.src;
  }
   /********* UPDATE PLAN */
   updatePlan(data:any)
   {
    //  this.postAdService.updatePlan(data).subscribe(res => {
       
    //  });
   }

   ngAfterViewInit() {
    this.clockHandle = setInterval(()=>{
      this.clock = new Date().toLocaleString();
      if(this.countClock === 6 )
      {
        this.countClock = 0;
        this.next();
      } else {
        this.countClock ++;
      }
    },1000);
  }
}

