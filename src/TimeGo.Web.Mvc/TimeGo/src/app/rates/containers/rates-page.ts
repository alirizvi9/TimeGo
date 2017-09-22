import 'rxjs/add/operator/take';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as fromRates from '../reducers';
import * as ratesActions from '../actions/rates';

import { RatesListPagingModel } from '../models/rates-list-paging.model';
import { RatesListItem } from '../models/rates-list-item.model';
import { AddRate } from '../models/add-rates.model';
import { DeleteRateModel } from '../models/delete.model'
import { UsersListItem } from '../../users/models/users-list-item.model'

@Component({
    selector: 'rates-page',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
    <up-rates-list [rates]="rates$ | async" [users]="users$ | async" [isLoaded]="isLoaded$ | async" [pagingModel]="pagingModel$ | async" [loading]="loading$ | async" (order)="orderRates($event)" (add)="addRate($event)" (delete)="delete($event)" (changePage)="changePage($event)"></up-rates-list>
  `,
})
export class RatesPageComponent {
    rates$: Observable<RatesListItem[]>;
    isLoaded$: Observable<boolean>;
    loading$: Observable<boolean>;
    pagingModel$: Observable<RatesListPagingModel>;
    users$: Observable<UsersListItem[]>


    constructor(private store: Store<fromRates.State>) {
        this.rates$ = store.select(fromRates.getRates);
        this.isLoaded$ = store.select(fromRates.getIsLoadedStatus);
        this.loading$ = store.select(fromRates.getLoadingStatus);
        this.pagingModel$ = store.select(fromRates.getPagingModel);
        this.users$ = store.select(fromRates.getUsers);
    }

    ngOnInit() {

        let pagingModelView: RatesListPagingModel = {
            orderBy: "id",
            page: 1,
            pageSize: 10,
            IsAscending: true,
            count: 10,
            IsOrder: true
        }
        this.store.dispatch(new ratesActions.GetAction(pagingModelView));
        this.store.dispatch(new ratesActions.GetUsersAction(0));
    }

    orderRates(orderBy: string) {
        let pagingModelView: RatesListPagingModel = {
            orderBy: orderBy,
            page: 1,
            pageSize: 10,
            IsAscending: true,
            count: 10,
            IsOrder: true
        }
        this.store.dispatch(new ratesActions.GetAction(pagingModelView));
    }

    addRate(model: AddRate) {
        this.store.dispatch(new ratesActions.SaveAction(model));
    }

    changePage(model: RatesListPagingModel)
    {
        this.store.dispatch(new ratesActions.GetAction(model));
    }

    delete(model: DeleteRateModel)
    {
        this.store.dispatch(new ratesActions.DeleteAction(model));
    }
}