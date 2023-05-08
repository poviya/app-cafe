import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Headers } from 'src/app/common/http-headers';
import { Post } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  url = 'post';

  constructor(private http: HttpClient) { }

  upload(data: any,  files: any): Observable<HttpEvent<any>>{
    const formData: FormData = new FormData();
    for (var i = 0; i < files.length; i++) {
      console.log('files', files[i]);  
      formData.append("files", files[i]);       // imagenes multiples
    }  
    formData.append('files', files);
    formData.append('data',  JSON.stringify(data));
    
    const req = new HttpRequest('POST', `${environment.api}${this.url}/create`, formData, {
      reportProgress: true,
      responseType: 'json',
    });
    return this.http.request(req);
  }

  create(data: any, files: any): Observable<any> { 

    const uploadData = new FormData();
    //uploadData.append('files', files[0]);       // una sola imagen
    
    for (var i = 0; i < files.length; i++) {
      console.log(files[i]);  
      uploadData.append("files", files[i]);       // imagenes multiples
    }  
    uploadData.append('data',  JSON.stringify(data));
    return this.http.post<any[]>(environment.api + this.url + '/create', uploadData,  Headers.HttpOptions());
  }

  findOne(id: any): Observable<Post> {
    return this.http
      .get<Post>(environment.api + this.url + '/' + id);
      //.pipe(retry(1), catchError(this.handleError));
  }

  findOneSlug(slug: any): Observable<Post> {
    //console.log(slug)
    return this.http.get<Post>(environment.api + this.url + '/slug/' + slug);
  }

  findAll(dataQuery: any, limit: number, offset: number): Observable<any> {
    return this.http.post<Post[]>(environment.api + this.url + `/find-all?limit=${limit}&offset=${offset}`, dataQuery);
  }

  findAllInfinite(dataQuery: any, limit: number, offset: number): Observable<any> {
    return this.http.post<Post[]>(environment.api + this.url + `/find-all-infinite?limit=${limit}&offset=${offset}`, dataQuery);
  }

  findAllCount(dataQuery: any): Observable<object[]> {
    
    return this.http.post<Post[]>(environment.api + this.url + '/find-all-count', dataQuery);
  }

  findAllUser(dataQuery: any, limit: number, offset: number): Observable<any> {
    return this.http.post<Post[]>(environment.api + this.url + `/find-all-user?limit=${limit}&offset=${offset}`, dataQuery, Headers.HttpOptions());
  }

  findAllUserInfinite(dataQuery: any, limit: number, offset: number): Observable<any> {
    return this.http.post<Post[]>(environment.api + this.url + `/find-all-user-infinite?limit=${limit}&offset=${offset}`, dataQuery, Headers.HttpOptions());
  }

  findAllUserCount(dataQuery: any): Observable<object[]> {
    
    return this.http.post<Post[]>(environment.api + this.url + '/find-all-user-count', dataQuery, Headers.HttpOptions());
  }

  update(id:string, data: any, files: any): Observable<any> { 
    const uploadData = new FormData();
    //uploadData.append('files', files[0]);       // una sola imagen

    for (var i = 0; i < files.length; i++) {  

      uploadData.append("files", files[i]);       // imagenes multiples
    }  
    uploadData.append('data',  JSON.stringify(data));
    return this.http.put<any[]>(environment.api + this.url + '/' + id, uploadData, Headers.HttpOptions());
  }

  update2(id: string, data: any): Observable<Post> {
    const uri = environment.api + this.url + '/' + id;
    console.log(uri);
    return this.http.put<Post>(uri, data, Headers.HttpOptions());
  }

  updateStatus(id: string, data: any): Observable<Post> {
    const uri = environment.api + this.url + '/status/' + id;
    console.log(uri);
    return this.http.put<Post>(uri, data, Headers.HttpOptions());
  }

  delete(id: any): Observable<any> {
    return this.http.delete<any>(environment.api + this.url + '/' + id);
  }
}
