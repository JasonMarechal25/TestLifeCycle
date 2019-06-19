import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Data }  from '../data/data.service';


@Component({
  selector: 'app-data-binding-on-push',
  templateUrl: './data-binding-on-push.component.html',
  styleUrls: ['./data-binding-on-push.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DataBindingOnPushComponent implements OnInit {

  constructor() { }

  @Input() dummyData: Data;
  @Input() log: boolean;

  ngOnInit() {
    if (! this.log) return;
    console.log('DataBindingOnPushComponent', 'ngOnInit');
  }

  ngOnChanges() {
    if (! this.log) return;
console.log('DataBindingOnPushComponent', 'ngOnChanges');
  }

  ngDoCheck() {
    if (! this.log) return;
console.log('DataBindingOnPushComponent', 'ngDoCheck');
  }

  ngAfterContentInit() {
    if (! this.log) return;
console.log('DataBindingOnPushComponent', 'ngAfterContentInit');
  }

  ngAfterContentChecked() {
    if (! this.log) return;
console.log('DataBindingOnPushComponent', 'ngAfterContentChecked');
  }

  ngAfterViewInit() {
    if (! this.log) return;
console.log('DataBindingOnPushComponent', 'nngAfterViewInitgOnInit');
  }

  ngAfterViewChecked() {
    if (! this.log) return;
console.log('DataBindingOnPushComponent', 'ngAfterViewChecked');
  }

  ngOnDestroy() {
    if (! this.log) return;
console.log('DataBindingOnPushComponent', 'ngOnDestroy');
  }
}