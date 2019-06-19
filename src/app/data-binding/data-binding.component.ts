import { Component, OnInit, Input } from '@angular/core';
import { Data }  from '../data/data.service';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  constructor() { }

  @Input() dummyData: Data;
  @Input() log: boolean;

  ngOnInit() {
    if (! this.log) return;
    console.log('DataBindingComponent', 'ngOnInit');
  }

  ngOnChanges() {
    if (! this.log) return;
console.log('DataBindingComponent', 'ngOnChanges');
  }

  ngDoCheck() {
    if (! this.log) return;
console.log('DataBindingComponent', 'ngDoCheck');
  }

  ngAfterContentInit() {
    if (! this.log) return;
console.log('DataBindingComponent', 'ngAfterContentInit');
  }

  ngAfterContentChecked() {
    if (! this.log) return;
console.log('DataBindingComponent', 'ngAfterContentChecked');
  }

  ngAfterViewInit() {
    if (! this.log) return;
console.log('DataBindingComponent', 'nngAfterViewInitgOnInit');
  }

  ngAfterViewChecked() {
    if (! this.log) return;
console.log('DataBindingComponent', 'ngAfterViewChecked');
  }

  ngOnDestroy() {
    if (! this.log) return;
console.log('DataBindingComponent', 'ngOnDestroy');
  }
}