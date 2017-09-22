import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { RatesRoutingModule } from './rates-routing.module';
import { RatesService } from './rates.service';
import { RatesPageComponent } from './containers/rates-page';
import { RatesEffects } from './effects/rates';
import { ComponentsModule } from './components/index'
import { reducers } from './reducers';

@NgModule({
    imports: [
        HttpModule,
        FormsModule,
        CommonModule,
        RatesRoutingModule,
        ComponentsModule,
        StoreModule.forFeature('ratesPage', reducers),
        EffectsModule.forFeature([RatesEffects])
    ],
    declarations: [
        RatesPageComponent
    ],
    providers: [RatesService]
})
export class RatesModule { }
