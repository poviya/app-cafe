import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PostCategory } from '../interfaces';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostCategoryService {

  url = 'post-category';
  
  constructor(
    private http: HttpClient
  ) 
  {}

  findAll(data: any): Observable<PostCategory[]> {

    return this.http.get<PostCategory[]>(environment.api + this.url);
  }
}
