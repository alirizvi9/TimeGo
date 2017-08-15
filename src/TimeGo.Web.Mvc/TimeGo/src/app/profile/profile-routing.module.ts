import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileEditPageComponent } from './containers/profile-page';

const routes: Routes = [
    {
        path: '',
        component: ProfileEditPageComponent,
        data: {
            title: 'Profile'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProfileRoutingModule { }
