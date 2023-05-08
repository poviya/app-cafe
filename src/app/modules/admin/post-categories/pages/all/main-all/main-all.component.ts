import { Component, OnInit } from '@angular/core';
import { PaymentOrder, PostCategory } from 'src/app/interfaces';
import { PaymentOrderService, PostCategoryService } from 'src/app/services';

@Component({
  selector: 'app-main-all',
  templateUrl: './main-all.component.html',
  styleUrls: ['./main-all.component.scss']
})
export class MainAllComponent implements OnInit {

  postCategory: PostCategory[];

  constructor(private postCategoryService: PostCategoryService) { }

  ngOnInit(): void {
    this.findAllPaid();
  }

  findAllPaid(): void {
    const data = {

    };
    this.postCategoryService.findAll(data).subscribe(res => {
      if(res) {
        this.postCategory = res;
      }
    })
  }
}
