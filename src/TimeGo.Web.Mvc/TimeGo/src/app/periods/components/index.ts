import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { PeriodListComponent } from './period-list/period-list';
import { DateTimePickerModule } from 'ngx-datetime-picker';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { HttpLoaderFactory } from '../../services/HttpLoaderFactory';



export const COMPONENTS = [
    PeriodListComponent
];

@NgModule({
    imports: [
        PaginationModule.forRoot(),
        DateTimePickerModule,
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