import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileEditPageComponent} from './containers/profile-page';
import {ProfileService} from './profile.service';
import {ProfileEditEffects} from './effects/profile-edit';
import {ComponentsModule} from './components/index'
import { reducers } from './reducers';

@NgModule({
    imports: [
        HttpModule,
        FormsModule,
        CommonModule,
        ProfileRoutingModule,
        ComponentsModule,
        StoreModule.forFeature('profile', reducers),
        EffectsModule.forFeature([ProfileEditEffects])
    ],
    declarations: [
        ProfileEditPageComponent
    ],
    providers: [ProfileService]
})
export class ProfileModule { }
