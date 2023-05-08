import { Component, Input, OnInit } from '@angular/core';
import { PaymentOrder } from 'src/app/interfaces';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input() paymentOrders: PaymentOrder[];
  
  constructor() { }

  ngOnInit(): void {
  }

  prinImages(images: any) 
  { 
    return images[0]['url'];
  };
}
