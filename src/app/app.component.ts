import { Component, OnInit } from '@angular/core';
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
      (response: any) => {
        this.fakeList = JSON.stringify(response);
        //console.log(this.fakeList+"hey");
      }
    );
  }

  getDataRegister(){
    this.api.dataApiFakeRegister().subscribe(
      (response: any) => {
        this.fakeList=JSON.stringify(response);
        console.log(response+"hey");
      }
    );
  }

  pass(){
    this.api.dataApiFakePost().subscribe(
      (response: any) => {
        this.fakeList=JSON.stringify(response);
        this.api.saveSession(response.token);
        
      }
    )
  }
}