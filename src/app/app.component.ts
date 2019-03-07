import { Component, OnInit } from '@angular/core';
import { ApiFake, Pass } from './model/ApiFake';
import { ApiFakeService } from './service/api-fake.service';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent{

  title = 'REQUESTINTERCEPTORS';

  fakeList: any;

  constructor(private api: ApiFakeService){}

  getData() {
    this.api.dataApiFake().subscribe(
      (request: any) => {
        this.fakeList = JSON.stringify(request);
        //console.log(this.fakeList);
      }
    );
  }

  getDataRegister(){
    this.api.dataApiFakeRegister().subscribe(
      (request: any) => {
        this.fakeList=JSON.stringify(request);
      }
    );
  }

  pass(){
    this.api.dataApiFakePost().subscribe(
      (request: any) => {
        this.fakeList=JSON.stringify(request);
      }
    )
  }

}