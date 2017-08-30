import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubscriptionDialogComponent } from './subscription/subscription.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';

@NgModule({
  imports: [
      TimepickerModule.forRoot(),
      CommonModule,
      ModalModule.forRoot(),
    ],
  exports: [
      SubscriptionDialogComponent
  ],
  declarations: [SubscriptionDialogComponent]
})
export class DialogsModule { }
