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

import { PeriodService } from '../period.service';
import * as periodActions from '../actions/period';
import { PeriodList } from '../models/period-list.model'
import { PeriodListPagingModel } from '../models/period-list-paging.model'
import { AddPeriod } from '../models/add-period.model';
import { ChangeStatus } from '../models/chagne-status-period.model'
import { DeletePeriodModel } from '../models/delete.model'
import { ToasterModule, ToasterService, ToasterConfig } from 'angular2-toaster/angular2-toaster';

@Injectable()
export class PeriodEffects {

    pagingModel: PeriodListPagingModel;

    @Effect()
    get$: Observable<Action> = this.actions$
        .ofType(periodActions.GET)
        .map(toPayload)
        .switchMap((query: PeriodListPagingModel) => {
            const nextGet$ = this.actions$.ofType(periodActions.GET).skip(1);
            this.pagingModel = query;
            return this.periodService
                .getPeriodList(query)
                .takeUntil(nextGet$)
                .map((users: PeriodList) => new periodActions.GetCompleteAction(users))
                .catch(() => of(new periodActions.GetCompleteAction(null)));
        });

    @Effect()
    save$: Observable<Action> = this.actions$
        .ofType(periodActions.ADD)
        .map(toPayload)
        .switchMap((query: AddPeriod) => {
            const nextGet$ = this.actions$.ofType(periodActions.ADD).skip(1);
            return this.periodService
                .addPeriod(query)
                .takeUntil(nextGet$)
                .map((result: any) => {
                    this.toasterService.pop('success', 'Success', 'Success Add Period');
                    return new periodActions.SaveCompleteAction(result);
                })
                .catch(() => of(new periodActions.SaveCompleteAction(null)));
        });

    @Effect()
    change$: Observable<Action> = this.actions$
        .ofType(periodActions.CHANGE_STATUS)
        .map(toPayload)
        .switchMap((model: ChangeStatus) => {
            const nextGet$ = this.actions$.ofType(periodActions.CHANGE_STATUS).skip(1);
            return this.periodService
                .changeStatus(model)
                .takeUntil(nextGet$)
                .map((result: any) => {
                    this.toasterService.pop('success', 'Success', 'Success Change Status To ' + model.status);
                    return new periodActions.ChangeStatusCompleteAction(result);
                })
                .catch(() => of(new periodActions.ChangeStatusCompleteAction(null)));
        });

    @Effect()
    delete$: Observable<Action> = this.actions$
        .ofType(periodActions.DELETE)
        .map(toPayload)
        .switchMap((model: DeletePeriodModel) => {
            const nextGet$ = this.actions$.ofType(periodActions.GET);
            return this.periodService
                .delete(model.id)
                .takeUntil(nextGet$)
                .map((result: any) => {
                    this.toasterService.pop('success', 'Success', 'Success Delete Period');
                    return new periodActions.GetAction(model.paging);
                })
                .catch(() => of(new periodActions.SaveCompleteAction(null)));
        });

    @Effect()
    update$: Observable<Action> = this.actions$
        .ofType(periodActions.CHANGE_STATUS_COMPLETE, periodActions.ADD_COMPLETE)
        .map(toPayload)
        .switchMap((model: any) => {
            const nextGet$ = this.actions$.ofType(periodActions.GET_COMPLETE);
            return this.periodService
                .getPeriodList(this.pagingModel)
                .takeUntil(nextGet$)
                .map((users: PeriodList) => new periodActions.GetCompleteAction(users))
                .catch(() => of(new periodActions.GetCompleteAction(null)));
        });

    constructor(
        private actions$: Actions,
        private periodService: PeriodService,
        private toasterService: ToasterService 
    ) { }
}