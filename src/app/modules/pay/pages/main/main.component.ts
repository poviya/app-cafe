import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PaymentOrderService } from 'src/app/services';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  isBrowser: boolean;
  codeCollection: any;
  paymentOrder: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    public router: Router,
    @Inject(PLATFORM_ID) private platformId: Object,
    private paymentOrderService: PaymentOrderService
    ) { 
    this.codeCollection = this.activatedRoute.snapshot.paramMap.get('codeCollection'); //console.log(this.idPost)
    if (isPlatformBrowser(this.platformId)) {
      this.isBrowser = true;
    }

    if (isPlatformServer(this.platformId)) {
    
    } 
  }


  ngOnInit(): void {
    this.findOne();
  }

  findOne()
  {
    if(this.codeCollection)
    {
      this.paymentOrderService.notification(this.codeCollection).subscribe(res => {
        console.log(res);
        if(res)
        {
          this.paymentOrder = res; 
        }
      });
    } 
  }

}
