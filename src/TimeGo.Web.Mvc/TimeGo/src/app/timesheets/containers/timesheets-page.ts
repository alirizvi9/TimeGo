import 'rxjs/add/operator/take';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as fromTimesheets from '../reducers';
import * as timesheetsActions from '../actions/timesheets';

import { Timesheets } from '../models/timesheets.model'
import { Period } from '../models/period.model'
import { Task } from '../models/task.model'
import { TimesheetsLine } from '../models/timesheets-line.model'

@Component({
    selector: 'timesheets-page',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
    <up-timesheets [timesheets]="timesheets$ | async" [isLoaded]="isLoaded$ | async" [periods]="periods$ | async" [tasks]="tasks$ | async" [loading]="loading$ | async" (selectPeriod)="selectPeriod($event)"></up-timesheets>
  `,
})
export class TimesheetsPageComponent {
    timesheets$: Observable<Timesheets>;
    isLoaded$: Observable<boolean>;
    loading$: Observable<boolean>;
    periods$: Observable<Period[]>;
    tasks$: Observable<Task[]>;

    constructor(private store: Store<fromTimesheets.State>) {
        this.timesheets$ = store.select(fromTimesheets.getTimesheet);
        this.isLoaded$ = store.select(fromTimesheets.getIsLoadedStatus);
        this.loading$ = store.select(fromTimesheets.getLoadingStatus);
        this.periods$ = store.select(fromTimesheets.getPeriods);
        this.tasks$ = store.select(fromTimesheets.getTasks);
    }

    ngOnInit() {
        this.store.dispatch(new timesheetsActions.GetPeriodAction(0));
        this.store.dispatch(new timesheetsActions.GetTasksAction(0));
    }

    selectPeriod(id: number)
    {
        this.store.dispatch(new timesheetsActions.GetAction(id));
    }
}