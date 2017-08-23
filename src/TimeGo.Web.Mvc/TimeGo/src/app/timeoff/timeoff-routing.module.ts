import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TimeoffPageComponent } from './containers/timeoff-page';
import { AlwaysAuthGuard } from '../AlwaysAuthGuard' 

const routes: Routes = [
    {
        path: '',
        component: TimeoffPageComponent,
        canActivate: [AlwaysAuthGuard],
        data: {
            title: 'Timeoff'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TimeoffRoutingModule { }
