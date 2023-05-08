import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from 'src/app/services';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  isBrowser: boolean;
  isServer: boolean;
  count: any;
  search: any;
  constructor( 
            private courseService: CourseService,
            @Inject(PLATFORM_ID) private platformId: object,
            private activeRoute: ActivatedRoute,
            ) { 
              if (isPlatformBrowser(this.platformId)) {
                this.isBrowser = true;
              }
              if (isPlatformServer(this.platformId)) {
                this.isServer = true;
              };

              this.search = this.activeRoute.snapshot.queryParamMap.get('search');
            }

  ngOnInit(): void {
    
    this.findAllAdsCount();
  }

  findAllAdsCount()
  {
    const data = {
      //q: this.myForm.value.q,
      //status: this.openTab == 1 ? 'ACTIVE' : 'INACTIVE'
    };
    this.courseService.findAllUserCount(data).subscribe(res => {
        this.count = res;
    });
  }
}
