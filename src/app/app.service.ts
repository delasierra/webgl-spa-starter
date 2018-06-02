import { Injectable } from '@angular/core';
import {Observable} from "rxjs/index";
import {HttpClient} from "@angular/common/http";
import {AppDataModel} from "./models/app-data.model";

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private dataUrl = '/assets/data-test/app-data.json'; // file

  constructor(private http: HttpClient) {
  }

  public getJsonTest(): Observable<AppDataModel> {
    return this.http.get<AppDataModel>(this.dataUrl);
  }
}
