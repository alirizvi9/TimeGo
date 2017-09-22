import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DatePickerModule } from 'ng2-datepicker';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { TasksComponent } from './tasks/tasks';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { HttpLoaderFactory } from '../../services/HttpLoaderFactory';




export const COMPONENTS = [
    TasksComponent
];

@NgModule({
    imports: [
        PaginationModule.forRoot(),
        DatePickerModule,
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        RouterModule,
        HttpClientModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        })
    ],
    declarations: COMPONENTS,
    exports: COMPONENTS,
})
export class ComponentsModule { }