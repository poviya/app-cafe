import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaymentOrder } from 'src/app/interfaces';
import { PaymentOrderService } from 'src/app/services';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  isBrowser: boolean;
  isServer: boolean;
  count: any;
  paymentOrders: PaymentOrder[];
  search: any;

  constructor(
    @Inject(PLATFORM_ID) private platformId: object,
    private paymentOrderService: PaymentOrderService,
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
   
  }

  findAllPaid(): void {
    this.paymentOrderService.findAllPayments().subscribe(res => {
      if(res) {
        this.paymentOrders = res;
      }
    })
  }
}

