import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PostSalesUnit } from '../interfaces';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostSalesUnitService {

  url = 'post-sales-unit';
  
  constructor(
    private http: HttpClient
  ) 
  {}

  findAll(data: any): Observable<PostSalesUnit[]> {

    return this.http.get<PostSalesUnit[]>(environment.api + this.url);
  }
}