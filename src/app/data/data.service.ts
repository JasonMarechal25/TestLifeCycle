import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject} from 'rxjs';

export class Data {
  dummyValue: Number = 0;
}

@Injectable()
export class DataService implements OnInit {

  constructor() { }

  dummyData = new Data();
  dataChanged = new BehaviorSubject<Data>(this.dummyData);

  ngOnInit() {
    this.dataChanged.next(this.dummyData)
  }

  incrementData() {
    this.dummyData.dummyValue++;
    this.dataChanged.next(this.dummyData);
  }

  changeData() {
    this.dummyData = new Data();
    this.dataChanged.next(this.dummyData);
  }



}