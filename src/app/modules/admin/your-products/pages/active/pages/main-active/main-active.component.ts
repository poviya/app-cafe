import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Suscription } from 'src/app/interfaces';
import { PostService } from 'src/app/services';

@Component({
  selector: 'app-main-active',
  templateUrl: './main-active.component.html',
  styleUrls: ['./main-active.component.scss']
})
export class MainActiveComponent implements OnInit {

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
      status: 'ACTIVE',
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
}