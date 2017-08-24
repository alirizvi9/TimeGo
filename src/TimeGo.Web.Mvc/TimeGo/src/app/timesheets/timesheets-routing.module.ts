import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TimesheetsPageComponent } from './containers/timesheets-page';
import { AlwaysAuthGuard } from '../AlwaysAuthGuard' 

const routes: Routes = [
    {
        path: '',
        component: TimesheetsPageComponent,
        canActivate: [AlwaysAuthGuard],
        data: {
            title: 'timesheets'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TimesheetsRoutingModule { }
