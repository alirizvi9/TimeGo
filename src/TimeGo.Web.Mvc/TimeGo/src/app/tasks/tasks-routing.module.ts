import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TasksPageComponent } from './containers/tasks-page';
import { AlwaysAuthGuard } from '../AlwaysAuthGuard' 

const routes: Routes = [
    {
        path: '',
        component: TasksPageComponent,
        canActivate: [AlwaysAuthGuard],
        data: {
            title: 'Tasks'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TasksRoutingModule { }
