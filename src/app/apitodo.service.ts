import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApitodoService {
  todo: string[] = [];
  url: string = "http://localhost:3030/todo";
  constructor(private http: HttpClient) {}

  read(): Observable<any>{
    return this.http.get(this.url);
  }

  add(params: any): Observable<any> {
    return this.http.post(this.url,params);
  }

  update(_id: string, params: any): Observable<any> {
    return this.http.patch(this.url+"/"+_id,params);
  }

  delete(_id: string): Observable<any> {
    return this.http.delete(this.url+"/"+_id);
  }

}
