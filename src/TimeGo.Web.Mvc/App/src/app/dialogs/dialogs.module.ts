import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { SubscriptionComponent } from './subscription/subscription.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ProfileComponent, SubscriptionComponent]
})
export class DialogsModule { }
