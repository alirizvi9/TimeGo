import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubscriptionDialogComponent } from './subscription/subscription.component';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  imports: [
      CommonModule,
      ModalModule.forRoot(),
    ],
  exports: [
      SubscriptionDialogComponent
  ],
  declarations: [SubscriptionDialogComponent]
})
export class DialogsModule { }