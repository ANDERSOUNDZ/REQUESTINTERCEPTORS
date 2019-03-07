import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { SolicitudInterceptor } from './interceptors/solicitud.interceptor';

import {
  MatButtonModule
} from '@angular/material';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule
    
  ],
  providers: [

    { provide: HTTP_INTERCEPTORS, useClass: SolicitudInterceptor, multi: true }
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
