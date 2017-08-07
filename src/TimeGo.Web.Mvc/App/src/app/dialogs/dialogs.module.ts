import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileDialogComponent } from './profile/profile.component';
import { SubscriptionDialogComponent } from './subscription/subscription.component';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  imports: [
      CommonModule,
      ModalModule.forRoot(),
    ],
  exports: [
      ProfileDialogComponent,
      SubscriptionDialogComponent
  ],
  declarations: [ProfileDialogComponent, SubscriptionDialogComponent]
})
export class DialogsModule { }
