import { Component, OnInit } from '@angular/core';
import {AppDataModel} from "../../models/app-data.model";
import {AppService} from "../../app.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private appData: AppDataModel;

  constructor(private appService: AppService) {
  }

  ngOnInit() {
    this.appService.getJsonTest()
        .subscribe(data => {
          this.appData = data;
          console.log(this.appData);
        });
  }

}
