import 'rxjs/add/operator/take';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as fromTimesheets from '../reducers';
import * as timesheetsActions from '../actions/timesheets';

import { ToasterModule, ToasterService, ToasterConfig } from 'angular2-toaster/angular2-toaster';

import { UsersListItem } from '../../users/models/users-list-item.model'
import { Timesheets } from '../models/timesheets.model'
import { SelectModel } from '../models/select-period.model'
import { Period } from '../models/period.model'
import { Task } from '../models/task.model'
import { TimesheetsLine } from '../models/timesheets-line.model'
import { AddModel } from '../models/add.model'

@Component({
    selector: 'timesheets-page',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
    <up-timesheets [timesheets]="timesheets$ | async" [isLoaded]="isLoaded$ | async" [periods]="periods$ | async" 
    [users]="users$ | async" [tasks]="tasks$ | async" [loading]="loading$ | async" 
    (selectPeriod)="selectPeriod($event)" (addLine)="addLine($event)" 
    (save)="save($event)" (delete)="delete($event)" (submit)="submit($event)" (approve)="approve($event)" (unlock)="unlock($event)"></up-timesheets>
  `,
})
export class TimesheetsPageComponent {
    timesheets$: Observable<Timesheets>;
    isLoaded$: Observable<boolean>;
    loading$: Observable<boolean>;
    periods$: Observable<Period[]>;
    tasks$: Observable<Task[]>;
    users$: Observable<UsersListItem[]>;

    constructor(private store: Store<fromTimesheets.State>,
        private toasterService: ToasterService) {
        this.timesheets$ = store.select(fromTimesheets.getTimesheet);
        this.isLoaded$ = store.select(fromTimesheets.getIsLoadedStatus);
        this.loading$ = store.select(fromTimesheets.getLoadingStatus);
        this.periods$ = store.select(fromTimesheets.getPeriods);
        this.tasks$ = store.select(fromTimesheets.getTasks);
        this.users$ = store.select(fromTimesheets.getUsers);
    }

    ngOnInit() {
        this.store.dispatch(new timesheetsActions.GetPeriodAction(0));
        this.store.dispatch(new timesheetsActions.GetTasksAction(0));
        this.store.dispatch(new timesheetsActions.GetUsersAction(0));
    }

    selectPeriod(model: SelectModel)
    {
        this.store.dispatch(new timesheetsActions.GetAction(model));
    }

    addLine(date: Date)
    {
        this.store.dispatch(new timesheetsActions.AddAction(date));
    }

    save(model: AddModel)
    {
        for (let line of model.Timesheets.Lines) {
            if (line.ValidationError != null) {
                this.toasterService.pop('error', 'Error Save', 'Timesheet line has not valid time');
                return;
            }
        }
        this.store.dispatch(new timesheetsActions.EditAction(model));
    }

    delete(model: TimesheetsLine)
    {
        this.store.dispatch(new timesheetsActions.DeleteAction(model));
    }

    submit(id: number)
    {
        this.store.dispatch(new timesheetsActions.SubmitAction(id));
    }

    unlock(id: number) {
        this.store.dispatch(new timesheetsActions.ToUnlockAction(id));
    }

    approve(id: number) {
        this.store.dispatch(new timesheetsActions.ApproveAction(id));
    }
}