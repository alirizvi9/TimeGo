import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimesheetsComponent } from './timesheets.component';

import { TimesheetsRoutingModule } from './timesheets-routing.module';

@NgModule({
  imports: [
    TimesheetsRoutingModule,
    CommonModule
  ],
  declarations: [TimesheetsComponent]
})
export class TimesheetsModule { }
