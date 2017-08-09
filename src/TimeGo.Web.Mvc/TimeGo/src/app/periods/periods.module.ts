import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeriodsRoutingModule } from './periods-routing.module';
import { PeriodsComponent } from './periods.component';

@NgModule({
  imports: [
    CommonModule,
    PeriodsRoutingModule
  ],
  declarations: [PeriodsComponent]
})
export class PeriodsModule { }
