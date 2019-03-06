import { Injectable } from '@angular/core';
import { ApiFake } from 'src/app/model/ApiFake'
import { Observable } from 'rxjs';
import { HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SolicitudInterceptor } from '../interceptors/solicitud.interceptor';


//------
export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: SolicitudInterceptor, multi: true },
];

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

