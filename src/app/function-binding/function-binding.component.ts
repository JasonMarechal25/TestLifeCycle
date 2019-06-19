import { Component, OnInit, Input } from '@angular/core';
import { Data, DataService }  from '../data/data.service';


@Component({
  selector: 'app-function-binding',
  templateUrl: './function-binding.component.html',
  styleUrls: ['./function-binding.component.css'],
})
export class FunctionBindingComponent implements OnInit {
@Input() log: boolean;
  constructor(private service: DataService) { }

  data() {
    if (! this.log) return;
    console.log('=> FunctionBindingComponent', 'fetch data');
    return this.service.dummyData.dummyValue;
  }

  ngOnInit() {
    if (! this.log) return;
    console.log('FunctionBindingComponent', 'ngOnInit');
  }

  ngOnChanges() {
    if (! this.log) return;
console.log('FunctionBindingComponent', 'ngOnChanges');
  }

  ngDoCheck() {
    if (! this.log) return;
console.log('FunctionBindingComponent', 'ngDoCheck');
  }

  ngAfterContentInit() {
console.log('FunctionBindingComponent', 'ngAfterContentInit');
  }

  ngAfterContentChecked() {
    if (! this.log) return;
console.log('FunctionBindingComponent', 'ngAfterContentChecked');
  }

  ngAfterViewInit() {
    if (! this.log) return;
console.log('FunctionBindingComponent', 'nngAfterViewInitgOnInit');
  }

  ngAfterViewChecked() {
    if (! this.log) return;
console.log('FunctionBindingComponent', 'ngAfterViewChecked');
  }

  ngOnDestroy() {
    if (! this.log) return;
console.log('FunctionBindingComponent', 'ngOnDestroy');
  }

  onClick() {
    if (! this.log) return;
    console.log("FunctionBindingComponent", "on click");
  }
}