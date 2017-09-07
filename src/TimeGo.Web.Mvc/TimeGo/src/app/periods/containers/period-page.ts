import 'rxjs/add/operator/take';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as fromPeriod from '../reducers';
import * as periodActions from '../actions/period';

import { PeriodListPagingModel } from '../models/period-list-paging.model';
import { PeriodListItem } from '../models/period-list-item.model';
import { AddPeriod } from '../models/add-period.model';
import { ChangeStatus } from '../models/chagne-status-period.model'
import { DeletePeriodModel } from '../models/delete.model'

@Component({
    selector: 'period-page',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
    <up-period-list [periods]="periods$ | async" [isLoaded]="isLoaded$ | async" [pagingModel]="pagingModel$ | async" [loading]="loading$ | async" (order)="orderPeriods($event)" (add)="addPeriod($event)" (delete)="delete($event)" (changeStatus)="changeStatus($event)" (changePage)="changePage($event)"></up-period-list>
  `,
})
export class PeriodPageComponent {
    periods$: Observable<PeriodListItem[]>;
    isLoaded$: Observable<boolean>;
    loading$: Observable<boolean>;
    pagingModel$: Observable<PeriodListPagingModel>;

    constructor(private store: Store<fromPeriod.State>) {
        this.periods$ = store.select(fromPeriod.getPeriods);
        this.isLoaded$ = store.select(fromPeriod.getIsLoadedStatus);
        this.loading$ = store.select(fromPeriod.getLoadingStatus);
        this.pagingModel$ = store.select(fromPeriod.getPagingModel);
    }

    ngOnInit() {

        let pagingModelView: PeriodListPagingModel = {
            orderBy: "id",
            page: 1,
            pageSize: 10,
            IsAscending: true,
            count: 10,
            IsOrder: true
        }
        this.store.dispatch(new periodActions.GetAction(pagingModelView));
    }

    orderPeriods(orderBy: string) {
        let pagingModelView: PeriodListPagingModel = {
            orderBy: orderBy,
            page: 1,
            pageSize: 10,
            IsAscending: true,
            count: 10,
            IsOrder: true
        }
        this.store.dispatch(new periodActions.GetAction(pagingModelView));
    }

    addPeriod(model: AddPeriod) {
        this.store.dispatch(new periodActions.SaveAction(model));
        this.orderPeriods("id")
    }

    changeStatus(model: ChangeStatus)
    {
        this.store.dispatch(new periodActions.ChangeStatusAction(model));
        this.orderPeriods("id")
    }

    changePage(model: PeriodListPagingModel)
    {
        this.store.dispatch(new periodActions.GetAction(model));
    }

    delete(model: DeletePeriodModel)
    {
        this.store.dispatch(new periodActions.DeleteAction(model));
    }
}