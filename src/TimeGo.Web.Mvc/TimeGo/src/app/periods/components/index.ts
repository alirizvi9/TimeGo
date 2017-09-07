import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DatePickerModule } from 'ng2-datepicker';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { PeriodListComponent } from './period-list/period-list';



export const COMPONENTS = [
    PeriodListComponent
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