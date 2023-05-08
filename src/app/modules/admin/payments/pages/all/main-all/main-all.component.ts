import { Component, OnInit } from '@angular/core';
import { PaymentOrder } from 'src/app/interfaces';
import { PaymentOrderService } from 'src/app/services';

@Component({
  selector: 'app-main-all',
  templateUrl: './main-all.component.html',
  styleUrls: ['./main-all.component.scss']
})
export class MainAllComponent implements OnInit {

  paymentOrders: PaymentOrder[];

  constructor(private paymentOrderService: PaymentOrderService) { }

  ngOnInit(): void {
    this.findAllPaid();
  }

  findAllPaid(): void {
    this.paymentOrderService.findAllPayments().subscribe(res => {
      if(res) {
        this.paymentOrders = res;
      }
    })
  }
}
