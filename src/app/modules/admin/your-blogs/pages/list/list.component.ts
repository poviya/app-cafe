import { DOCUMENT, isPlatformBrowser, isPlatformServer } from '@angular/common';
import { AfterViewInit, Component, ElementRef, EventEmitter, HostListener, Inject, Input, OnInit, Output, PLATFORM_ID, QueryList, ViewChildren } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Post } from 'src/app/interfaces';
import { DialogService } from 'src/app/library/dialog/dialog.service';
import { ModalService } from 'src/app/library/modal';
import { SpinnerService } from 'src/app/library/spinner/spinner.service';
import { PostService } from 'src/app/services';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input() posts: any = [];
   
  post: Post;
  @Input() loading = false;

  @ViewChildren('theLastList', {read: ElementRef})
  theLastList: QueryList<ElementRef>;
  @Output() infiniteEvent = new EventEmitter<string>();
  
  showButton = false;
  scrollHeight = 500;

  alSub: any;
  @Input() totalPages: any;
  currentPage = 0;
  limitPage = 10;
  observer: any;

  isBrowser: boolean;
  data: any;
  adCount: any;
  myForm: FormGroup;
  
  bodyText: string;
  postLoading:string[]=["hola","que","tal"];

  constructor(
    private postService: PostService,
    private fb: FormBuilder,
    public router: Router,
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(DOCUMENT) private document: Document,
    private spinnerService: SpinnerService,
    private dialogService: DialogService
  ) {

    this.myForm = this.fb.group({
      search: [null],
    });

    if (isPlatformBrowser(this.platformId)) {
      this.isBrowser = true;
    
      this.intersectionObserver();
    }

    if (isPlatformServer(this.platformId)) {
    
    } 
    
  }

  ngOnInit(): void {
    //this.findAllPostUser();  //console.log(this.openTab == 1 ? 'ACTIVE' : this.openTab == 2 ? 'INACTIVE' :  '');
    //this.findAllAdsCount();
  }

  ngAfterViewInit() : void
  {
    this.theLastList.changes.subscribe((d) => {
      if(d.last) this.observer.observe(d.last.nativeElement);
    });
  }

  // findAllPostUser()
  // {
  //   this.data = {
  //     search: this.myForm.value.search,
  //     status: this.openTab == 1 ? 'ACTIVE' : 'SUSPENDED'
  //   };
  //   this.loading = true;
  //   this.alSub = this.postService.findAllUser(this.data, this.limitPage, this.currentPage).subscribe(res => {
  //     this.totalPages = res.totalPages;
  //     res.data.forEach((element: any) => {
  //       this.posts.push(element);
  //     });
  //     this.loading = false;
  //   });
  // }

  // findAllPostUserInfinite()
  // {
  //   this.data = {
  //     search: this.myForm.value.search,
  //     status: this.openTab == 1 ? 'ACTIVE' : 'SUSPENDED'
  //   };
    
  //   this.alSub = this.postService.findAllUserInfinite(this.data, this.limitPage, this.currentPage).subscribe(res => {
  //     res.data.forEach((element: any) => {
  //       this.posts.push(element);
  //     });
  //   });
  // }

  @HostListener('window:scroll')
  onWindowScroll(): void {
   const yOffset = window.pageYOffset;
   const scrollTop = this.document.documentElement.scrollTop;
   this.showButton = (yOffset || scrollTop) > this.scrollHeight;
  }

  onScrollTop() : void {
    this.document.documentElement.scrollTop = 0;
  }

  onScrollDown(): void {
    //console.log('Down')
  }

  intersectionObserver() {
    let options = {
      root: null,//document.querySelector('#scrollArea'),
      rootMargin: '0px',
      threshold: 0.5//1.0
    }
    this.observer = new IntersectionObserver((entries) => {
        if(entries[0].isIntersecting) {
          if(this.currentPage < this.totalPages) {
            this.currentPage = this.currentPage + this.limitPage;
            const data: any = {
              currentPage: this.currentPage
            }
            this.infiniteEvent.emit(data);
            //this.findAllPostUserInfinite();
          }
        }
    }, options);
  }

  onSubmit(): void {
    this.totalPages = 0;
    this.currentPage = 0;
    this.posts = [];
    //this.findAllPostUser();
   
  }

  toggleTabs($tabNumber: number){
    this.router.navigate(['/panel/your-ads/suspended']);
    /*
    this.openTab = $tabNumber;
    this.totalPages = 0;
    this.currentPage = 0;
    this.posts = [];
    this.findAllPostUser();
    this.myForm.patchValue({
      search: null
    });*/
  }
 
  onEdit(post: Post): void {
    this.router.navigate(['/panel/create-blog/details/' + post._id]);
  }

  onPromote(post: Post): void {
    this.router.navigate(['/panel/create/promote/' + post._id]);
  }

  onPhotos(post: Post): void {
    this.router.navigate(['/panel/create/media/' + post._id]);
  }
  
  togglePublished(post: Post) {
    
    if(post.publishedCount! > 0)
    {
      const data = {
        published: !post.published
      }
      post.published = !post.published;
      this.postService.update(post._id!, data, {}).subscribe(res => {
      });
    }
  } 

  prinImages(images: any) 
  { 
    if(images[0].type == 'video') {
      return images[0]['urlSnapshot'];
    } else  {
      return images[0]['url'];
    }
    
  };

  //+++++++++DELETE
  onDelete(): void {
    if(!this.post)
    return;

    this.spinnerService.start();
    this.dialogService.toogleDelete();
    this.postService.delete(this.post._id).subscribe(res => {
      console.log(res);
      if(res) {
        this.posts = this.posts.filter((item: Post) => item._id!.split('.')[0] !== this.post._id);
        this.spinnerService.close();
        this.post = {};
      }
    })
  }

  onDeleteDialog(post: Post) {
    this.dialogService.toogleDelete();
    this.post = post;
  }

  get moodalDelete() {
    return this.dialogService.modalDelete;
  }

  closeDeleteModal() {
    this.dialogService.toogleDelete();
  }

  //+++++++++++++STATUS

  get moodalStatus() {
    return this.dialogService.modalStatus;
  }

  onStatusDialog(post: Post) {
    this.dialogService.toogleStatus();
    this.post = post;
  }

  closeStatusModal() {
    this.dialogService.toogleStatus();
  }

  onStatus(): void {
    this.dialogService.toogleStatus();
    this.spinnerService.start();
    if (this.post) {
      const data = {
        status: this.post.status ==  'ACTIVE' ?  'SUSPENDED' : 'ACTIVE',
      }
      this.postService.updateStatus(this.post._id!, data).subscribe( res => {
        if(res)
        {
          this.posts = this.posts.filter((item: Post) => item._id!.split('.')[0] !== this.post._id);
        }
        this.spinnerService.close();
      });
    }
  }

  onSuspended(post: Post) {

  }

  onActive(post: Post) {
    
  }
}

