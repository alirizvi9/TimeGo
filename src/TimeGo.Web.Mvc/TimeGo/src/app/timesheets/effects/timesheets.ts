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

import { SelectModel } from '../models/select-period.model'
import { TimesheetsService } from '../timesheets.service';
import * as timesheetsActions from '../actions/timesheets';
import { Timesheets } from '../models/timesheets.model'
import { Period } from '../models/period.model'
import { AddModel } from '../models/add.model'
import { Task } from '../models/task.model'
import { UsersListItem } from '../../users/models/users-list-item.model'
import { TimesheetsLine } from '../models/timesheets-line.model'
import { ToasterModule, ToasterService, ToasterConfig } from 'angular2-toaster/angular2-toaster';

@Injectable()
export class TimesheetsEffects {
    @Effect()
    get$: Observable<Action> = this.actions$
        .ofType(timesheetsActions.GET)
        .map(toPayload)
        .switchMap((query: SelectModel) => {
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

    @Effect()
    getUsers$: Observable<Action> = this.actions$
        .ofType(timesheetsActions.GET_USERS)
        .map(toPayload)
        .switchMap(() => {
            const nextGet$ = this.actions$.ofType(timesheetsActions.GET_USERS_COMPLETE);
            return this.timesheetsService.getUsers()
                .takeUntil(nextGet$)
                .map((result: UsersListItem[]) => new timesheetsActions.GetUsersCompleteAction(result))
                .catch(() => of(new timesheetsActions.GetUsersCompleteAction(null)));
        });

    @Effect()
    approve$: Observable<Action> = this.actions$
        .ofType(timesheetsActions.APPROVE)
        .map(toPayload)
        .switchMap((query: number) => {
            const nextGet$ = this.actions$.ofType(timesheetsActions.APPROVE_COMPLETE);
            return this.timesheetsService.approve(query)
                .takeUntil(nextGet$)
                .map((result: any) => new timesheetsActions.ApproveCompleteAction(result))
                .catch(() => of(new timesheetsActions.ApproveCompleteAction(null)));
        });

    @Effect()
    submite$: Observable<Action> = this.actions$
        .ofType(timesheetsActions.SUBMIT)
        .map(toPayload)
        .switchMap((query: number) => {
            const nextGet$ = this.actions$.ofType(timesheetsActions.SUBMIT_COMPLETE);
            return this.timesheetsService.submit(query)
                .takeUntil(nextGet$)
                .map((result: any) => new timesheetsActions.SubmitCompleteAction(result))
                .catch(() => of(new timesheetsActions.SubmitCompleteAction(null)));
        });

    @Effect()
    unlock: Observable<Action> = this.actions$
        .ofType(timesheetsActions.REQUEST_TO_UNLOCK)
        .map(toPayload)
        .switchMap((query: number) => {
            const nextGet$ = this.actions$.ofType(timesheetsActions.REQUEST_TO_UNLOCK_COMPLETE);
            return this.timesheetsService.unlock(query)
                .takeUntil(nextGet$)
                .map((result: any) => new timesheetsActions.ToUnlockCompleteAction(result))
                .catch(() => of(new timesheetsActions.ToUnlockCompleteAction(null)));
        });

    @Effect()
    edit$: Observable<Action> = this.actions$
        .ofType(timesheetsActions.EDIT)
        .map(toPayload)
        .switchMap((query: AddModel) => {
            const nextGet$ = this.actions$.ofType(timesheetsActions.GET);
            return this.timesheetsService.editTimesheet(query.Timesheets)
                .takeUntil(nextGet$)
                .map((result: any) => {
                    this.toasterService.pop('success', 'Success Save', 'Timesheet saved');
                    return new timesheetsActions.GetAction({ PeriodId: query.Period, UserId: query.User });
                })
                .catch(() => of(new timesheetsActions.EditCompleteAction(null)));
        });

    constructor(
        private actions$: Actions,
        private timesheetsService: TimesheetsService,
        private toasterService: ToasterService 
    ) { }
}