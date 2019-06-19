import { Component } from '@angular/core';
import { Data, DataService } from './data/data.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular';
  dataBindingIsLogged = true;
  dataBindingOnPushIsLogged = true;
  functionBindingIsLogged = true;
  functionBindingOnPushIsLogged = true;
  purePipeIsLogged = true;

  constructor(public service: DataService) {
    this.service.dummyData.dummyValue = 3;
  }

  public up() {
    console.log('Up');
    this.service.dummyData.dummyValue++;
  }

  change() {
    this.service.dummyData = new Data();
  }

  onClick() {
    console.log("clicked on AppComponent");
  }

  logDataBinding() {
    this.dataBindingIsLogged = !this.dataBindingIsLogged;
  }

    logDataBindingOnPush() {
    this.dataBindingOnPushIsLogged = !this.dataBindingOnPushIsLogged;
  }

    logFunctionBinding() {
    this.functionBindingIsLogged = !this.functionBindingIsLogged;
  }

    logFunctionBindingOnPush() {
    this.functionBindingOnPushIsLogged = !this.functionBindingOnPushIsLogged;
  }

    logPurePipe() {
    this.purePipeIsLogged = !this.purePipeIsLogged;
  }


}