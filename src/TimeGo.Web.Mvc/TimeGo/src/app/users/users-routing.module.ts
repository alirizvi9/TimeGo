import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersPageComponent} from './containers/users-page';

const routes: Routes = [
    {
        path: '',
        component: UsersPageComponent,
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
