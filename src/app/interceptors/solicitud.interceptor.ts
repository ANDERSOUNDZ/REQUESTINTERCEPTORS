import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {  HttpInterceptor, HttpHandler,HttpEvent, HttpRequest } from '@angular/common/http';
import { ApiFakeService } from '../service/api-fake.service';

@Injectable()

  export class SolicitudInterceptor implements HttpInterceptor {

    private baseApi = "https://reqres.in";


    constructor (private apiFakeService: ApiFakeService){};

    //aqui no cacho
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    /*   request= request.clone({
        url: request.url +'?page=2'
    });*/

    let token = this.apiFakeService.getSession();
      if(!token){
          token="";
      }


    const modifiedRequest = request.clone({
      url: this.baseApi + request.url, 
      setHeaders:{
        Authorization: token
      }
    });

    /*const passRequest = request.clone({
      url: this.baseApi + request.url, 
      setHeaders:{
        email: 'sydney@fife',
        password: 'pistol'
      }
    });*/

    const body = request.body;
    console.log('BODY');
    console.log(body);
    const headers = request.headers;
    console.log('HEADERS');
    console.log(headers);
    const url = modifiedRequest.urlWithParams;
    console.log('MODIFIED URL');
    console.log(url);

    //const body = passRequest.body;
    //console.log('TOKEN');
    //console.log(body);
  
    return next.handle(modifiedRequest);
    
    }

  }