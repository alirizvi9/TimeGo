import { NgModule } from '@angular/core';

import { WidgetsComponent } from './widgets.component';
import { WidgetsRoutingModule } from './widgets-routing.module';

@NgModule({
  imports: [
    WidgetsRoutingModule
  ],
  declarations: [ WidgetsComponent ]
})
export class WidgetsModule { }
