import { Injectable } from '@angular/core';
import { Pass } from 'src/app/model/ApiFake'
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiFakeService {

  

  constructor(private http:HttpClient){}
  
  dataApiFake(): Observable<any>{
  return this.http.get<any>("/api/users?page=2");
  }

  dataApiFakeRegister(): Observable<any>{
    return this.http.get<any>("/api/register");
  }

  //dataApiFakePost(): Observable<any>{
    //return this.http.post<any>("/api/register");
  //}

}

