import { Injectable } from '@angular/core';
import {LazyLoadingModule} from "./lazy-loading.module";

@Injectable({
  providedIn: LazyLoadingModule
})
export class LazyLoadingService {

  constructor() { }
}
