import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from 'src/app/services';

@Component({
  selector: 'app-main-suspended',
  templateUrl: './main-suspended.component.html',
  styleUrls: ['./main-suspended.component.scss']
})
export class MainSuspendedComponent implements OnInit {

  data: any;
  courses: any = [];
  alSub: any;
  totalPages: any;
  currentPage = 0;
  limitPage = 5;
  observer: any;
  loading = false;

  search: any;

  constructor( 
    private activeRoute: ActivatedRoute,
    private courseService: CourseService,
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
      status: 'SUSPENDED'
    };
    this.loading = true;
    this.alSub = this.courseService.findAllUser(this.data, this.limitPage, this.currentPage).subscribe(res => {
      this.totalPages = res.totalPages;
      res.data.forEach((element: any) => {
        this.courses.push(element);
      });
      this.loading = false;
    });
  }

  findAllPostUserInfinite($event: any)
  {
    this.data = {
      search: '',
      status: 'SUSPENDED'
    };
    this.currentPage = $event.currentPage;
  
    this.alSub = this.courseService.findAllInfinite(this.data, this.limitPage, this.currentPage).subscribe(res => {
      res.data.forEach((element: any) => {
        this.courses.push(element);
      });
    });
  }
}