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
  
  dataApiFake(): Observable<ApiFake[]>{
  return this.http.get<ApiFake[]>(this.baseApi+"/api/users?page=2");
  }

}

