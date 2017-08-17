import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TimeoffPageComponent } from './containers/timeoff-page';

const routes: Routes = [
    {
        path: '',
        component: TimeoffPageComponent,
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
