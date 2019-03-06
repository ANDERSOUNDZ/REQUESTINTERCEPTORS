import { Injectable } from '@angular/core';
import { ApiFake } from 'src/app/model/ApiFake'
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiFakeService {

  private baseApi = "https://reqres.in";

  constructor(private http:HttpClient){}
  
  dataApiFake(): Observable<any>{
  return this.http.get<any>(this.baseApi+"/api/users?page=2");
  }

}

