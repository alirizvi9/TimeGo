import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { UsersListComponent } from './users-list/users-list';



export const COMPONENTS = [
    UsersListComponent
];

@NgModule({
    imports: [
        PaginationModule.forRoot(),
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        RouterModule
    ],
    declarations: COMPONENTS,
    exports: COMPONENTS,
})
export class ComponentsModule { }