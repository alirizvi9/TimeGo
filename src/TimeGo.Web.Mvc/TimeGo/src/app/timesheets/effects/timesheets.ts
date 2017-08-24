import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/skip';
import 'rxjs/add/operator/takeUntil';
import { Injectable, InjectionToken, Optional, Inject } from '@angular/core';
import { Effect, Actions, toPayload } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { async } from 'rxjs/scheduler/async';
import { empty } from 'rxjs/observable/empty';
import { of } from 'rxjs/observable/of';

import { TimesheetsService } from '../timesheets.service';
import * as timesheetsActions from '../actions/timesheets';
import { Timesheets } from '../models/timesheets.model'
import { Period } from '../models/period.model'
import { Task } from '../models/task.model'
import { TimesheetsLine } from '../models/timesheets-line.model'

@Injectable()
export class TimesheetsEffects {
    @Effect()
    get$: Observable<Action> = this.actions$
        .ofType(timesheetsActions.GET)
        .map(toPayload)
        .switchMap((query: number) => {
            const nextGet$ = this.actions$.ofType(timesheetsActions.GET).skip(1);
            return this.timesheetsService.getTimesheet(query)
                .takeUntil(nextGet$)
                .map((timesheet: Timesheets) => new timesheetsActions.GetCompleteAction(timesheet))
                .catch(() => of(new timesheetsActions.GetCompleteAction(null)));
        });

    @Effect()
    getPeriods$: Observable<Action> = this.actions$
        .ofType(timesheetsActions.GET_PERIODS)
        .map(toPayload)
        .switchMap(() => {
            const nextGet$ = this.actions$.ofType(timesheetsActions.GET_PERIODS).skip(1);
            return this.timesheetsService.getPeriods()
                .takeUntil(nextGet$)
                .map((result: Period[]) => new timesheetsActions.GetPeriodCompleteAction(result))
                .catch(() => of(new timesheetsActions.GetPeriodCompleteAction(null)));
        });

    @Effect()
    getTasks$: Observable<Action> = this.actions$
        .ofType(timesheetsActions.GET_Tasks)
        .map(toPayload)
        .switchMap(() => {
            const nextGet$ = this.actions$.ofType(timesheetsActions.GET_Tasks).skip(1);
            return this.timesheetsService.getTasks()
                .takeUntil(nextGet$)
                .map((result: Task[]) => new timesheetsActions.GetTasksCompleteAction(result))
                .catch(() => of(new timesheetsActions.GetTasksCompleteAction(null)));
        });

    constructor(
        private actions$: Actions,
        private timesheetsService: TimesheetsService
    ) { }
}