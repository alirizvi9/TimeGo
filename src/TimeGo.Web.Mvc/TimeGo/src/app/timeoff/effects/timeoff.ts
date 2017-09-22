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

import { TimeoffService } from '../timeoff.service';
import * as timeoffActions from '../actions/timeoff';
import { TimeoffList } from '../models/timeoff-list.model'
import { TimeoffListPagingModel } from '../models/timeoff-list-paging.model'
import { AddTimeoff } from '../models/add-timeoff.model';
import { ChangeStatus } from '../models/chagne-status-timeoff.model'
import { ToasterModule, ToasterService, ToasterConfig } from 'angular2-toaster/angular2-toaster';

@Injectable()
export class TimeoffEffects {

    pagingModel: TimeoffListPagingModel;

    @Effect()
    get$: Observable<Action> = this.actions$
        .ofType(timeoffActions.GET)
        .map(toPayload)
        .switchMap((query: TimeoffListPagingModel) => {
            const nextGet$ = this.actions$.ofType(timeoffActions.GET).skip(1);
            this.pagingModel = query;
            return this.timeoffService
                .getTimeoffList(query)
                .takeUntil(nextGet$)
                .map((users: TimeoffList) => new timeoffActions.GetCompleteAction(users))
                .catch(() => of(new timeoffActions.GetCompleteAction(null)));
        });

    @Effect()
    save$: Observable<Action> = this.actions$
        .ofType(timeoffActions.ADD)
        .map(toPayload)
        .switchMap((query: AddTimeoff) => {
            const nextGet$ = this.actions$.ofType(timeoffActions.ADD).skip(1);
            return this.timeoffService
                .addTimeoff(query)
                .takeUntil(nextGet$)
                .map((result: any) => {
                    this.toasterService.pop('success', 'Success', 'Success Add Timeoff');
                    return new timeoffActions.SaveCompleteAction(result);
                })
                .catch(() => of(new timeoffActions.SaveCompleteAction(null)));
        });

    @Effect()
    change$: Observable<Action> = this.actions$
        .ofType(timeoffActions.CHANGE_STATUS)
        .map(toPayload)
        .switchMap((model: ChangeStatus) => {
            const nextGet$ = this.actions$.ofType(timeoffActions.CHANGE_STATUS).skip(1);
            return this.timeoffService
                .changeStatus(model)
                .takeUntil(nextGet$)
                .map((result: any) => {
                    this.toasterService.pop('success', 'Success Change status', 'Timeoff request: ' + model.status);
                    return new timeoffActions.ChangeStatusCompleteAction(result);
                })
                .catch(() => of(new timeoffActions.ChangeStatusCompleteAction(null)));
        });

    @Effect()
    update$: Observable<Action> = this.actions$
        .ofType(timeoffActions.CHANGE_STATUS_COMPLETE, timeoffActions.ADD_COMPLETE)
        .map(toPayload)
        .switchMap((model: any) => {
            const nextGet$ = this.actions$.ofType(timeoffActions.GET_COMPLETE);
            return this.timeoffService
                .getTimeoffList(this.pagingModel)
                .takeUntil(nextGet$)
                .map((users: TimeoffList) => new timeoffActions.GetCompleteAction(users))
                .catch(() => of(new timeoffActions.GetCompleteAction(null)));
        });

    constructor(
        private actions$: Actions,
        private timeoffService: TimeoffService,
        private toasterService: ToasterService 
    ) { }
}