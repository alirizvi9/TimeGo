import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DatePickerModule } from 'ng2-datepicker';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { TimeoffListComponent } from './timeoff-list/timeoff-list';



export const COMPONENTS = [
    TimeoffListComponent
];

@NgModule({
    imports: [
        PaginationModule.forRoot(),
        DatePickerModule,
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        RouterModule
    ],
    declarations: COMPONENTS,
    exports: COMPONENTS,
})
export class ComponentsModule { }