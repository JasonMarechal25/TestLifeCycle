import { Component, OnInit, Input, Pipe, PipeTransform } from '@angular/core';
import { Data, DataService }  from '../data/data.service';

@Pipe({name: 'pipeIt', pure: true})
export class TestPurePipe implements PipeTransform {
  transform(value: number): number {
    console.log('! => pipeTransformation');
    return value+1;
  }
}

@Component({
  selector: 'app-pure-pipe',
  templateUrl: './pure-pipe.component.html',
  styleUrls: ['./pure-pipe.component.css']
})
export class PurePipeComponent implements OnInit {
@Input() log: boolean;
  constructor(private service: DataService) { }

  data() {
    if (! this.log) return;
    console.log('=> PurePipeComponent', 'fetch data');
    return this.service.dummyData.dummyValue;
  }

  ngOnInit() {
    if (! this.log) return;
    console.log('PurePipeComponent', 'ngOnInit');
  }

  ngOnChanges() {
    if (! this.log) return;
console.log('PurePipeComponent', 'ngOnChanges');
  }

  ngDoCheck() {
    if (! this.log) return;
console.log('PurePipeComponent', 'ngDoCheck');
  }

  ngAfterContentInit() {
    if (! this.log) return;
console.log('PurePipeComponent', 'ngAfterContentInit');
  }

  ngAfterContentChecked() {
    if (! this.log) return;
console.log('PurePipeComponent', 'ngAfterContentChecked');
  }

  ngAfterViewInit() {
    if (! this.log) return;
console.log('PurePipeComponent', 'nngAfterViewInitgOnInit');
  }

  ngAfterViewChecked() {
    if (! this.log) return;
console.log('PurePipeComponent', 'ngAfterViewChecked');
  }

  ngOnDestroy() {
    if (! this.log) return;
console.log('PurePipeComponent', 'ngOnDestroy');
  }

  onClick() {
    if (! this.log) return;
    console.log("PurePipeComponent", "on click");
  }
}