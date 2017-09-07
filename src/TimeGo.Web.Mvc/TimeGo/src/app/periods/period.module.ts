import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { PeriodRoutingModule } from './period-routing.module';
import { PeriodService } from './period.service';
import { PeriodPageComponent } from './containers/period-page';
import { PeriodEffects } from './effects/period';
import { ComponentsModule } from './components/index'
import { reducers } from './reducers';

@NgModule({
    imports: [
        HttpModule,
        FormsModule,
        CommonModule,
        PeriodRoutingModule,
        ComponentsModule,
        StoreModule.forFeature('periodPage', reducers),
        EffectsModule.forFeature([PeriodEffects])
    ],
    declarations: [
        PeriodPageComponent
    ],
    providers: [PeriodService]
})
export class PeriodModule { }
