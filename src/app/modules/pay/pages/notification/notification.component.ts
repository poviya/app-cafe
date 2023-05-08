import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PaymentOrder } from 'src/app/interfaces';
import { ToolsService } from 'src/app/services';
import { PaymentOrderService } from 'src/app/services/payment-order.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {

  @Input() paymentOrder: PaymentOrder;

  constructor(  
    public router: Router) {
  }

  ngOnInit(): void {
  }

}
