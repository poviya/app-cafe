import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PaymentOrder } from '../interfaces/paymentOrder';
import { Headers } from 'src/app/common/http-headers';
import { ResponseApi } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class PaymentOrderService {

  url = 'payment-order';

  constructor(
    private http: HttpClient
  ) { }
  
  createProduct(data: any): Observable<PaymentOrder> {

    return this.http.post<PaymentOrder>(environment.api + this.url + '/create-product', data);
  }

  createCourse(data: any): Observable<PaymentOrder> {

    return this.http.post<PaymentOrder>(environment.api + this.url + '/create-course', data);
  }

  notification(id: string): Observable<PaymentOrder> {

    return this.http.get<PaymentOrder>(environment.api + this.url + '/notification/' + id);
  }

  codeCollection(id: string): Observable<PaymentOrder> {

    return this.http.get<PaymentOrder>(environment.api + this.url + '/codeCollection/' + id);
  }

  findOne(id: string): Observable<PaymentOrder> {

    return this.http.get<PaymentOrder>(environment.api + this.url + '/' + id);
  }

  findAllPaidUser(): Observable<PaymentOrder[]> {

    return this.http.post<PaymentOrder[]>(environment.api + this.url + '/find-all-paid-user', null , Headers.HttpOptions());
  }

  findAllPayments(): Observable<PaymentOrder[]> {

    return this.http.post<PaymentOrder[]>(environment.api + this.url + '/find-all-payments', null , Headers.HttpOptions());
  }
}
