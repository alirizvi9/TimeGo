import { TestBed, async } from '@angular/core/testing';
import { TasksComponent } from '../tasks/components/tasks/tasks';
import { TasksListPagingModel } from '../tasks/models/tasks-list-paging.model';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DatePickerModule } from 'ng2-datepicker';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { TranslateCustomLoader } from './services/TranslateCustomLoader';

describe('TasksComponent', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                PaginationModule.forRoot(),
                DatePickerModule,
                CommonModule,
                ReactiveFormsModule,
                FormsModule,
                RouterModule,
                TranslateModule.forRoot({
                    loader: {
                        provide: TranslateLoader,
                        useClass: TranslateCustomLoader
                    }
                })
            ],
            declarations: [
                TasksComponent
            ],
        });
        TestBed.compileComponents();
    });

    it('should have loading variable with false', async(() => {
        const fixture = TestBed.createComponent(TasksComponent);
        fixture.componentInstance.tasks = [];
        fixture.componentInstance.pagingModel = {
            count: 0,
            IsAscending: true,
            IsOrder: true,
            orderBy: "id",
            page: 1,
            pageSize: 10
        };
        fixture.componentInstance.isLoaded = true;
        fixture.componentInstance.loading = false;
        fixture.detectChanges();
        expect(fixture.componentInstance.loading).toBe(false);
    }));

    it('should return fa-sort class', async(() => {
        const fixture = TestBed.createComponent(TasksComponent);
        fixture.componentInstance.tasks = [];
        fixture.componentInstance.pagingModel = {
            count: 0,
            IsAscending: true,
            IsOrder: true,
            orderBy: "id",
            page: 1,
            pageSize: 10
        };
        fixture.componentInstance.isLoaded = true;
        fixture.componentInstance.loading = false;
        fixture.detectChanges();
        let classArrow = fixture.componentInstance.getArrowClass("LastName");
        expect(classArrow).toBe("fa fa-sort");
    }));

    it('should return fa-sort-asc class', async(() => {
        const fixture = TestBed.createComponent(TasksComponent);
        fixture.componentInstance.tasks = [];
        fixture.componentInstance.pagingModel = {
            count: 0,
            IsAscending: true,
            IsOrder: true,
            orderBy: "id",
            page: 1,
            pageSize: 10
        };
        fixture.componentInstance.isLoaded = true;
        fixture.componentInstance.loading = false;
        fixture.detectChanges();
        let classArrow = fixture.componentInstance.getArrowClass("id");
        expect(classArrow).toBe("fa fa-sort-asc");
    }));

    it('should return fa-sort-desc class', async(() => {
        const fixture = TestBed.createComponent(TasksComponent);
        fixture.componentInstance.tasks = [];
        fixture.componentInstance.pagingModel = {
            count: 0,
            IsAscending: false,
            IsOrder: true,
            orderBy: "id",
            page: 1,
            pageSize: 10
        };
        fixture.componentInstance.isLoaded = true;
        fixture.componentInstance.loading = false;
        fixture.detectChanges();
        let classArrow = fixture.componentInstance.getArrowClass("id");
        expect(classArrow).toBe("fa fa-sort-desc");
    }));
});
