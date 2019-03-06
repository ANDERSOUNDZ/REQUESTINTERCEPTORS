import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {  HttpInterceptor, HttpHandler,HttpEvent, HttpRequest } from '@angular/common/http';



@Injectable()

  export class SolicitudInterceptor implements HttpInterceptor {
    private baseApi = "https://reqres.in";
    //aqui no cacho
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
   /*   request= request.clone({
        url: request.url +'?page=2'
    });*/
    const modifiedRequest = request.clone({
      url: this.baseApi + request.url
  });
    const body = request.body;
    console.log('BODY');
    console.log(body);
    const headers = request.headers;
    console.log('HEADERS');
    console.log(headers);

    const url = modifiedRequest.urlWithParams;
    console.log('MODIFIED URL');
    console.log(url);

    return next.handle(modifiedRequest);

    }
  
  }