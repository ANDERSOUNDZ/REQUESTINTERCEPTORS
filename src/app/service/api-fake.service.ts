import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { stringify } from 'querystring';


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

  dataApiFakePost(): Observable<any>{
    return this.http.post<any>("/api/register",{
      "email": "sydney@fife",
      "password": "pistol"
    });
  }

}

