import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/services';

@Component({
  selector: 'app-main-suspended',
  templateUrl: './main-suspended.component.html',
  styleUrls: ['./main-suspended.component.scss']
})
export class MainSuspendedComponent implements OnInit {

  data: any;
  posts: any = [];
  alSub: any;
  totalPages: any;
  currentPage = 0;
  limitPage = 5;
  observer: any;
  loading = false;

  search: any;

  constructor( 
    private activeRoute: ActivatedRoute,
    private postService: PostService,
    ) {
    this.search = this.activeRoute.snapshot.queryParamMap.get('search');
   }

  ngOnInit(): void {
    this.findAll(); 
  }

  findAll()
  {
    this.data = {
      search: this.search,
      status: 'SUSPENDED',
      type: 'ARTICLE'
    };
    this.loading = true;
    this.alSub = this.postService.findAllUser(this.data, this.limitPage, this.currentPage).subscribe(res => {
      this.totalPages = res.totalPages;
      res.data.forEach((element: any) => {
        this.posts.push(element);
      });
      this.loading = false;
    });
  }

  findAllPostUserInfinite($event: any)
  {
    this.data = {
      search: '',
      status: 'SUSPENDED',
      type: 'ARTICLE'
    };
    this.currentPage = $event.currentPage;
  
    this.alSub = this.postService.findAllInfinite(this.data, this.limitPage, this.currentPage).subscribe(res => {
      res.data.forEach((element: any) => {
        this.posts.push(element);
      });
    });
  }
}