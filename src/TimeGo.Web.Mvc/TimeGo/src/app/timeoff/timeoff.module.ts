import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { TimeoffRoutingModule } from './timeoff-routing.module';
import { TimeoffService } from './timeoff.service';
import { TimeoffPageComponent } from './containers/timeoff-page';
import { TimeoffEffects } from './effects/timeoff';
import { ComponentsModule } from './components/index'
import { reducers } from './reducers';

@NgModule({
    imports: [
        HttpModule,
        FormsModule,
        CommonModule,
        TimeoffRoutingModule,
        ComponentsModule,
        StoreModule.forFeature('timeoffPage', reducers),
        EffectsModule.forFeature([TimeoffEffects])
    ],
    declarations: [
        TimeoffPageComponent
    ],
    providers: [TimeoffService]
})
export class TimeoffModule { }
