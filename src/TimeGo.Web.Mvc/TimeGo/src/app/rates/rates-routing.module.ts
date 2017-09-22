import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RatesPageComponent } from './containers/rates-page';
import { AlwaysAuthGuard } from '../AlwaysAuthGuard' 

const routes: Routes = [
    {
        path: '',
        component: RatesPageComponent,
        canActivate: [AlwaysAuthGuard],
        data: {
            title: 'Rates'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RatesRoutingModule { }
