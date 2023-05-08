import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NumericValidator } from 'src/app/common/custom-validators.ts';
import { Course } from 'src/app/interfaces';
import { SpinnerService } from 'src/app/library/spinner/spinner.service';
import { PaymentOrderService, PostService } from 'src/app/services';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  myform: FormGroup;
  @Input() course: Course;
  
  constructor(
    private readonly paymentOrderService: PaymentOrderService,
    private readonly spinnerService: SpinnerService,
    private fb: FormBuilder, 
  ) { }

  ngOnInit(): void {
    this.createFormControls();
  }

  createFormControls() {
    this.myform = this.fb.group({
      quantity: [1, [Validators.nullValidator, NumericValidator]],
     });
  }
  onPay(course: Course): void {
    this.spinnerService.start();
    const data = {
      Course: course._id,
      quantity: Number(this.myform.value.quantity),
      amountDiscount: 0
    }
    this.paymentOrderService.createCourse(data).subscribe( res => {
      if(res) {
        let url = '';
        if (document.domain === 'localhost') {
          url = 'http://localhost:4201/pay/checkout/' + res.codeCollection;
        } else if (document.domain === 'celccar.com') {
          url = 'https://poviya.com/pay/checkout/' + res.codeCollection;
        }

        const link = document.createElement('a');
        link.href = url;
        link.target = '_self'; // Open the link in a new tab
        document.body.appendChild(link);
        link.click(); // Simulates a click on the link to open the new page
        this.spinnerService.close();
      }
    })
  }
}
