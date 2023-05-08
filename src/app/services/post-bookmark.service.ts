import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { Headers } from 'src/app/common/http-headers';
import { PostBookmark } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class PostBookmarkService {

  url = 'post-bookmark';
  
  constructor(
    private http: HttpClient
  ) 
  { 
    
  }

  create(data: any): Observable<PostBookmark> {

    return this.http.post<PostBookmark>(environment.api + this.url + '/', data);
  }

  findOneUser(data: any): Observable<PostBookmark> {

    return this.http.post<PostBookmark>(environment.api + this.url + '/find-one-user', data);
  }

  findAllUser(dataQuery: any, limit: number, offset: number): Observable<any> {
    return this.http.post<PostBookmark[]>(environment.api + this.url + `/find-all-user?limit=${limit}&offset=${offset}`, dataQuery, Headers.HttpOptions());
  }

  findAllUserInfinite(dataQuery: any, limit: number, offset: number): Observable<any> {
    return this.http.post<PostBookmark[]>(environment.api + this.url + `/find-all-user-infinite?limit=${limit}&offset=${offset}`, dataQuery, Headers.HttpOptions());
  }

  delete(id: any): Observable<object> {
    return this.http.delete<PostBookmark[]>(environment.api + this.url + '/' + id);
  }
}
