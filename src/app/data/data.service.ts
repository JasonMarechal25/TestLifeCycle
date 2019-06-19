import { Injectable } from '@angular/core';

export class Data {
  dummyValue: Number = 0;
}

@Injectable()
export class DataService {

  constructor() { }

  dummyData = new Data();

}