import { TestBed, async } from '@angular/core/testing';
import { TimesheetsComponent } from '../timesheets/components/timesheets/timesheets';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DatePickerModule } from 'ng2-datepicker';
import { DatePipe } from '@angular/common';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { TranslateCustomLoader } from './services/TranslateCustomLoader';
import { AccountService } from "../services/AccountService";
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { TestManagerAccountService } from "./services/TestManagerAccountService";
import { TimesheetsLine } from '../timesheets/models/timesheets-line.model'

describe('TimesheetsComponent', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                TimepickerModule.forRoot(),
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
            providers: [{
                provide: AccountService,
                useClass: TestManagerAccountService
            }],
            declarations: [
                TimesheetsComponent
            ],
        });
        TestBed.compileComponents();
    });

    it('should have loading variable with false', async(() => {
        const fixture = TestBed.createComponent(TimesheetsComponent);
        fixture.componentInstance.timesheets = {
            ApprovalStatus: "",
            ApprovedBy: "",
            ApprovedOn: new Date(),
            ApproverNotes: "",
            EmployeeNotes: "",
            Id: 0,
            Lines: [],
            Lock: true,
            RevisedBy: "",
            RevisedOn: new Date(),
            SubmittedOn: new Date()
        };
        fixture.componentInstance.tasks = [];
        fixture.componentInstance.periods = [];
        fixture.componentInstance.users = [];
        fixture.componentInstance.isLoaded = false;
        fixture.componentInstance.loading = false;
        fixture.detectChanges();
        expect(fixture.componentInstance.loading).toBe(false);
    }));

    it('should have to total time one hr', async(() => {
        const fixture = TestBed.createComponent(TimesheetsComponent);
        fixture.componentInstance.timesheets = {
            ApprovalStatus: "",
            ApprovedBy: "",
            ApprovedOn: new Date(),
            ApproverNotes: "",
            EmployeeNotes: "",
            Id: 0,
            Lines: [],
            Lock: true,
            RevisedBy: "",
            RevisedOn: new Date(),
            SubmittedOn: new Date()
        };
        fixture.componentInstance.tasks = [];
        fixture.componentInstance.periods = [];
        fixture.componentInstance.users = [];
        fixture.componentInstance.isLoaded = false;
        fixture.componentInstance.loading = false;
        fixture.detectChanges();

        let line: TimesheetsLine = {
            Id: 0,
            Date: new Date(),
            EndTime: new Date(2017, 10, 1, 19, 20, 0),
            StartTime: new Date(2017, 10, 1, 18, 10, 0),
            Task: "",
            TaskId: 0,
            ValidationError: ""
        };
        let hr = fixture.componentInstance.totalLineTimeHr(line);
        expect(hr).toBe(1);
    }));

    it('should have to total time ten minutes', async(() => {
        const fixture = TestBed.createComponent(TimesheetsComponent);
        fixture.componentInstance.timesheets = {
            ApprovalStatus: "",
            ApprovedBy: "",
            ApprovedOn: new Date(),
            ApproverNotes: "",
            EmployeeNotes: "",
            Id: 0,
            Lines: [],
            Lock: true,
            RevisedBy: "",
            RevisedOn: new Date(),
            SubmittedOn: new Date()
        };
        fixture.componentInstance.tasks = [];
        fixture.componentInstance.periods = [];
        fixture.componentInstance.users = [];
        fixture.componentInstance.isLoaded = false;
        fixture.componentInstance.loading = false;
        fixture.detectChanges();

        let line: TimesheetsLine = {
            Id: 0,
            Date: new Date(),
            EndTime: new Date(2017, 10, 1, 19, 20, 0),
            StartTime: new Date(2017, 10, 1, 18, 10, 0),
            Task: "",
            TaskId: 0,
            ValidationError: ""
        };
        let hr = fixture.componentInstance.totalLineTimeMin(line);
        expect(hr).toBe(10);
    }));

    it('should have to total time 2 hr', async(() => {
        const fixture = TestBed.createComponent(TimesheetsComponent);
        fixture.componentInstance.timesheets = {
            ApprovalStatus: "",
            ApprovedBy: "",
            ApprovedOn: new Date(),
            ApproverNotes: "",
            EmployeeNotes: "",
            Id: 0,
            Lines: [],
            Lock: true,
            RevisedBy: "",
            RevisedOn: new Date(),
            SubmittedOn: new Date()
        };
        fixture.componentInstance.tasks = [];
        fixture.componentInstance.periods = [];
        fixture.componentInstance.users = [];
        fixture.componentInstance.isLoaded = false;
        fixture.componentInstance.loading = false;
        fixture.detectChanges();

        let line: TimesheetsLine = {
            Id: 0,
            Date: new Date(),
            EndTime: new Date(2017, 10, 1, 19, 20, 0),
            StartTime: new Date(2017, 10, 1, 18, 10, 0),
            Task: "",
            TaskId: 0,
            ValidationError: ""
        };
        let hr = fixture.componentInstance.totalTimeHr([line, line]);
        expect(hr).toBe(2);
    }));

    it('should have to total time 20 minutes', async(() => {
        const fixture = TestBed.createComponent(TimesheetsComponent);
        fixture.componentInstance.timesheets = {
            ApprovalStatus: "",
            ApprovedBy: "",
            ApprovedOn: new Date(),
            ApproverNotes: "",
            EmployeeNotes: "",
            Id: 0,
            Lines: [],
            Lock: true,
            RevisedBy: "",
            RevisedOn: new Date(),
            SubmittedOn: new Date()
        };
        fixture.componentInstance.tasks = [];
        fixture.componentInstance.periods = [];
        fixture.componentInstance.users = [];
        fixture.componentInstance.isLoaded = false;
        fixture.componentInstance.loading = false;
        fixture.detectChanges();

        let line: TimesheetsLine = {
            Id: 0,
            Date: new Date(),
            EndTime: new Date(2017, 10, 1, 19, 20, 0),
            StartTime: new Date(2017, 10, 1, 18, 10, 0),
            Task: "",
            TaskId: 0,
            ValidationError: ""
        };
        let hr = fixture.componentInstance.totalTimeMin([line, line]);
        expect(hr).toBe(20);
    }));
});
