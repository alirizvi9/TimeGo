import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimeoffRoutingModule } from './timeoff-routing.module';
import { TimeoffComponent } from './timeoff.component';

@NgModule({
  imports: [
    CommonModule,
    TimeoffRoutingModule
  ],
  declarations: [TimeoffComponent]
})
export class TimeoffModule { }
