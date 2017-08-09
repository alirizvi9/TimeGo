import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule} from '@angular/http';
import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent} from './profile.component';
import {FormsModule} from '@angular/forms';

@NgModule({
    imports: [
        HttpModule,
        FormsModule,
        CommonModule,
        ProfileRoutingModule
    ],
    declarations: [ProfileComponent]
})
export class ProfileModule { }
