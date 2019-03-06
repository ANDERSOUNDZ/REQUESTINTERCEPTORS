import { Injectable } from '@angular/core';
import { ApiFake } from 'src/app/model/ApiFake'
import { Observable } from 'rxjs';
import { HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiFakeService {

  

  constructor(private http:HttpClient){}
  
  dataApiFake(): Observable<any>{
  return this.http.get<any>("/api/users?page=2");
  }

}

