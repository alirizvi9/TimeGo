import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlwaysAuthGuard } from '../AlwaysAuthGuard' 
import { TaskManagerAuthGuard } from '../TaskManagerAuthGuard' 

import { UsersPageComponent} from './containers/users-page';

const routes: Routes = [
    {
        path: '',
        component: UsersPageComponent,
        canActivate: [AlwaysAuthGuard, TaskManagerAuthGuard],
        data: {
            title: 'Users'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UsersRoutingModule { }
