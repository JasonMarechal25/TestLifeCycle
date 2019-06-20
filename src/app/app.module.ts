import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DataService } from './data/data.service';
import { FunctionBindingComponent } from './function-binding/function-binding.component';
import { FunctionBindingOnPushComponent } from './function-binding-on-push/function-binding-on-push.component';
import { DataBindingOnPushComponent } from './data-binding-on-push/data-binding-on-push.component';
import { PurePipeComponent, TestPurePipe } from './pure-pipe/pure-pipe.component';
import { ObserveComponent } from './observe/observe.component';
import { CommonModule} from '@angular/common';

@NgModule({
  imports:      [ BrowserModule, FormsModule, CommonModule ],
  declarations: [ AppComponent, HelloComponent, DataBindingComponent, FunctionBindingComponent, FunctionBindingOnPushComponent, DataBindingOnPushComponent, PurePipeComponent, TestPurePipe, ObserveComponent ],
  bootstrap:    [ AppComponent ],
  providers: [DataService]
})
export class AppModule { }
