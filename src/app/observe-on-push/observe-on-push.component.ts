import { Component, OnInit, Input, ChangeDetectionStrategy} from '@angular/core';
import { Data, DataService }  from '../data/data.service';

@Component({
  selector: 'app-observe-on-push',
  templateUrl: './observe-on-push.component.html',
  styleUrls: ['./observe-on-push.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ObserveOnPushComponent implements OnInit {

  constructor(private service: DataService) { }

  @Input() log: boolean;

  data() {
    if (this.log)
       console.log('ObserveOnPushComponent', 'fetch data');
    return this.service.dummyData.dummyValue;
  }

  ngOnInit() {
    if (! this.log) return;
    console.log('ObserveOnPushComponent', 'ngOnInit');
  }

  ngOnChanges() {
    if (! this.log) return;
console.log('ObserveOnPushComponent', 'ngOnChanges');
  }

  ngDoCheck() {
    if (! this.log) return;
console.log('ObserveOnPushComponent', 'ngDoCheck');
  }

  ngAfterContentInit() {
    if (! this.log) return;
console.log('ObserveOnPushComponent', 'ngAfterContentInit');
  }

  ngAfterContentChecked() {
    if (! this.log) return;
console.log('ObserveOnPushComponent', 'ngAfterContentChecked');
  }

  ngAfterViewInit() {
    if (! this.log) return;
console.log('ObserveOnPushComponent', 'nngAfterViewInitgOnInit');
  }

  ngAfterViewChecked() {
    if (! this.log) return;
console.log('ObserveOnPushComponent', 'ngAfterViewChecked');
  }

  ngOnDestroy() {
    if (! this.log) return;
console.log('ObserveOnPushComponent', 'ngOnDestroy');
  }
}