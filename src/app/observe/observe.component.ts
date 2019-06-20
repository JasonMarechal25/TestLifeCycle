import { Component, OnInit, Input, } from '@angular/core';
import { Data, DataService }  from '../data/data.service';

@Component({
  selector: 'app-observe',
  templateUrl: './observe.component.html',
  styleUrls: ['./observe.component.css']
})
export class ObserveComponent implements OnInit {

  constructor(private service: DataService) { }

  @Input() log: boolean;

  data() {
    if (! this.log) return;
    console.log('ObserveComponent', 'fetch data');
    return this.service.dummyData.dummyValue;
  }

  ngOnInit() {
    if (! this.log) return;
    console.log('ObserveComponent', 'ngOnInit');
  }

  ngOnChanges() {
    if (! this.log) return;
console.log('ObserveComponent', 'ngOnChanges');
  }

  ngDoCheck() {
    if (! this.log) return;
console.log('ObserveComponent', 'ngDoCheck');
  }

  ngAfterContentInit() {
    if (! this.log) return;
console.log('ObserveComponent', 'ngAfterContentInit');
  }

  ngAfterContentChecked() {
    if (! this.log) return;
console.log('ObserveComponent', 'ngAfterContentChecked');
  }

  ngAfterViewInit() {
    if (! this.log) return;
console.log('ObserveComponent', 'nngAfterViewInitgOnInit');
  }

  ngAfterViewChecked() {
    if (! this.log) return;
console.log('ObserveComponent', 'ngAfterViewChecked');
  }

  ngOnDestroy() {
    if (! this.log) return;
console.log('ObserveComponent', 'ngOnDestroy');
  }
}