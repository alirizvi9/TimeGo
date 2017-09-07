import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PeriodPageComponent } from './containers/period-page';
import { AlwaysAuthGuard } from '../AlwaysAuthGuard' 

const routes: Routes = [
    {
        path: '',
        component: PeriodPageComponent,
        canActivate: [AlwaysAuthGuard],
        data: {
            title: 'Period'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PeriodRoutingModule { }
