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

import { RatesService } from '../rates.service';
import * as ratesActions from '../actions/rates';
import { RatesList } from '../models/rates-list.model'
import { RatesListPagingModel } from '../models/rates-list-paging.model'
import { AddRate } from '../models/add-rates.model';
import { DeleteRateModel } from '../models/delete.model';
import { UsersListItem } from '../../users/models/users-list-item.model'
import { ToasterModule, ToasterService, ToasterConfig } from 'angular2-toaster/angular2-toaster';

@Injectable()
export class RatesEffects {

    pagingModel: RatesListPagingModel;

    @Effect()
    get$: Observable<Action> = this.actions$
        .ofType(ratesActions.GET)
        .map(toPayload)
        .switchMap((query: RatesListPagingModel) => {
            const nextGet$ = this.actions$.ofType(ratesActions.GET).skip(1);
            this.pagingModel = query;
            return this.ratesService
                .getRates(query)
                .takeUntil(nextGet$)
                .map((rates: RatesList) => new ratesActions.GetCompleteAction(rates))
                .catch(() => of(new ratesActions.GetCompleteAction(null)));
        });

    @Effect()
    getUsers$: Observable<Action> = this.actions$
        .ofType(ratesActions.GET_USERS)
        .map(toPayload)
        .switchMap((query: any) => {
            const nextGet$ = this.actions$.ofType(ratesActions.GET_USERS_COMPLETE);
            return this.ratesService
                .getUsers()
                .takeUntil(nextGet$)
                .map((users: UsersListItem[]) => new ratesActions.GetUsersCompleteAction(users))
                .catch(() => of(new ratesActions.GetUsersCompleteAction(null)));
        });

    @Effect()
    save$: Observable<Action> = this.actions$
        .ofType(ratesActions.ADD)
        .map(toPayload)
        .switchMap((query: AddRate) => {
            const nextGet$ = this.actions$.ofType(ratesActions.ADD).skip(1);
            return this.ratesService
                .addRate(query)
                .takeUntil(nextGet$)
                .map((result: any) => {
                    this.toasterService.pop('success', 'Success', 'Success Add User Rate');
                    return new ratesActions.SaveCompleteAction(result);
                })
                .catch(() => of(new ratesActions.SaveCompleteAction(null)));
        });

    @Effect()
    delete$: Observable<Action> = this.actions$
        .ofType(ratesActions.DELETE)
        .map(toPayload)
        .switchMap((model: DeleteRateModel) => {
            const nextGet$ = this.actions$.ofType(ratesActions.GET);
            return this.ratesService
                .delete(model.id)
                .takeUntil(nextGet$)
                .map((result: any) => {
                    this.toasterService.pop('success', 'Success', 'Success Delete User Rate');
                    return new ratesActions.GetAction(model.paging);
                })
                .catch(() => of(new ratesActions.SaveCompleteAction(null)));
        });

    @Effect()
    update$: Observable<Action> = this.actions$
        .ofType(ratesActions.ADD_COMPLETE)
        .map(toPayload)
        .switchMap((model: any) => {
            const nextGet$ = this.actions$.ofType(ratesActions.GET_COMPLETE);
            return this.ratesService
                .getRates(this.pagingModel)
                .takeUntil(nextGet$)
                .map((users: RatesList) => new ratesActions.GetCompleteAction(users))
                .catch(() => of(new ratesActions.GetCompleteAction(null)));
        });

    constructor(
        private actions$: Actions,
        private ratesService: RatesService,
        private toasterService: ToasterService 
    ) { }
}