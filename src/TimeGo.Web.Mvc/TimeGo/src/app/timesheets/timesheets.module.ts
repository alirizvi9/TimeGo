import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { TimesheetsRoutingModule } from './timesheets-routing.module';
import { TimesheetsService } from './timesheets.service';
import { TimesheetsPageComponent } from './containers/timesheets-page';
import { TimesheetsEffects } from './effects/timesheets';
import { ComponentsModule } from './components/index'
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { reducers } from './reducers';

@NgModule({
    imports: [
        TimepickerModule.forRoot(),
        HttpModule,
        FormsModule,
        CommonModule,
        TimesheetsRoutingModule,
        ComponentsModule,
        StoreModule.forFeature('timesheetsPage', reducers),
        EffectsModule.forFeature([TimesheetsEffects]),
    ],
    declarations: [
        TimesheetsPageComponent
    ],
    providers: [TimesheetsService]
})
export class TimesheetsModule { }
