import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {  HttpInterceptor, HttpHandler,HttpEvent, HttpRequest } from '@angular/common/http';

@Injectable()

  export class SolicitudInterceptor implements HttpInterceptor {
    //aqui no cacho
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        request= request.clone({
            url: request.url +'?page=2'
        });
        return next.handle(request);
    }
  
  }
  
  