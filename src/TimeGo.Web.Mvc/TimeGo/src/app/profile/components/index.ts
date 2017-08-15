import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ProfileEditComponent } from './profile-edit/profile-edit';



export const COMPONENTS = [
    ProfileEditComponent
];

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule, 
        FormsModule,
        RouterModule
    ],
    declarations: COMPONENTS,
    exports: COMPONENTS,
})
export class ComponentsModule { }