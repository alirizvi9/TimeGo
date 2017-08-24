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
import { DatepickerModule, BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { ComponentsModule } from './components/index'
import { reducers } from './reducers';

@NgModule({
    imports: [
        HttpModule,
        FormsModule,
        CommonModule,
        TimesheetsRoutingModule,
        ComponentsModule,
        StoreModule.forFeature('timesheetsPage', reducers),
        EffectsModule.forFeature([TimesheetsEffects]),
        DatepickerModule.forRoot(),
        BsDatepickerModule.forRoot(),
    ],
    declarations: [
        TimesheetsPageComponent
    ],
    providers: [TimesheetsService]
})
export class TimesheetsModule { }
