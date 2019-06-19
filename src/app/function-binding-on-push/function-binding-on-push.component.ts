import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Data, DataService }  from '../data/data.service';

@Component({
  selector: 'app-function-binding-on-push',
  templateUrl: './function-binding-on-push.component.html',
  styleUrls: ['./function-binding-on-push.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FunctionBindingOnPushComponent implements OnInit {
@Input() log: boolean;
  constructor(private service: DataService) { }

  data() {
    if (! this.log) return;
    console.log('FunctionBindingOnPushComponent', 'fetch data');
    return this.service.dummyData.dummyValue;
  }

  ngOnInit() {
    if (! this.log) return;
    console.log('FunctionBindingOnPushComponent', 'ngOnInit');
  }

  ngOnChanges() {
    if (! this.log) return;
console.log('FunctionBindingOnPushComponent', 'ngOnChanges');
  }

  ngDoCheck() {
    if (! this.log) return;
console.log('FunctionBindingOnPushComponent', 'ngDoCheck');
  }

  ngAfterContentInit() {
    if (! this.log) return;
console.log('FunctionBindingOnPushComponent', 'ngAfterContentInit');
  }

  ngAfterContentChecked() {
    if (! this.log) return;
console.log('FunctionBindingOnPushComponent', 'ngAfterContentChecked');
  }

  ngAfterViewInit() {
    if (! this.log) return;
console.log('FunctionBindingOnPushComponent', 'nngAfterViewInitgOnInit');
  }

  ngAfterViewChecked() {
    if (! this.log) return;
console.log('FunctionBindingOnPushComponent', 'ngAfterViewChecked');
  }

  ngOnDestroy() {
    if (! this.log) return;
console.log('FunctionBindingOnPushComponent', 'ngOnDestroy');
  }
}