import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { UsersRoutingModule } from './users-routing.module';
import {UsersService} from './users.service';
import { UsersPageComponent} from './containers/users-page';
import {UsersEffects} from './effects/users';
import {ComponentsModule} from './components/index'
import { reducers } from './reducers';

@NgModule({
    imports: [
        HttpModule,
        FormsModule,
        CommonModule,
        UsersRoutingModule,
        ComponentsModule,
        StoreModule.forFeature('usersPage', reducers),
        EffectsModule.forFeature([UsersEffects])
    ],
    declarations: [
        UsersPageComponent
    ],
    providers: [UsersService]
})
export class UsersModule { }
