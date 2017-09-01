import 'rxjs/add/operator/take';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as fromTimeoff from '../reducers';
import * as timeoffActions from '../actions/timeoff';

import { TimeoffListPagingModel } from '../models/timeoff-list-paging.model';
import { TimeoffListItem } from '../models/timeoff-list-item.model';
import { AddTimeoff } from '../models/add-timeoff.model';
import { ChangeStatus } from '../models/chagne-status-timeoff.model'

@Component({
    selector: 'timeoff-page',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
    <up-timeoff-list [timeoffrequests]="timeoffrequests$ | async" [isLoaded]="isLoaded$ | async" [pagingModel]="pagingModel$ | async" [loading]="loading$ | async" (order)="orderTimeoffrequests($event)" (add)="addTimeoffrequest($event)" (changeStatus)="changeStatus($event)" (changePage)="changePage($event)"></up-timeoff-list>
  `,
})
export class TimeoffPageComponent {
    timeoffrequests$: Observable<TimeoffListItem[]>;
    isLoaded$: Observable<boolean>;
    loading$: Observable<boolean>;
    pagingModel$: Observable<TimeoffListPagingModel>;

    constructor(private store: Store<fromTimeoff.State>) {
        this.timeoffrequests$ = store.select(fromTimeoff.getTimeoffRequests);
        this.isLoaded$ = store.select(fromTimeoff.getIsLoadedStatus);
        this.loading$ = store.select(fromTimeoff.getLoadingStatus);
        this.pagingModel$ = store.select(fromTimeoff.getPagingModel);
    }

    ngOnInit() {

        let pagingModelView: TimeoffListPagingModel = {
            orderBy: "id",
            page: 1,
            pageSize: 10,
            IsAscending: true,
            count: 10,
            IsOrder: true
        }
        this.store.dispatch(new timeoffActions.GetAction(pagingModelView));
    }

    orderTimeoffrequests(orderBy: string) {
        let pagingModelView: TimeoffListPagingModel = {
            orderBy: orderBy,
            page: 1,
            pageSize: 10,
            IsAscending: true,
            count: 10,
            IsOrder: true
        }
        this.store.dispatch(new timeoffActions.GetAction(pagingModelView));
    }

    addTimeoffrequest(model: AddTimeoff) {
        this.store.dispatch(new timeoffActions.SaveAction(model));
        this.orderTimeoffrequests("id")
    }

    changeStatus(model: ChangeStatus)
    {
        this.store.dispatch(new timeoffActions.ChangeStatusAction(model));
        this.orderTimeoffrequests("id")
    }

    changePage(model: TimeoffListPagingModel)
    {
        this.store.dispatch(new timeoffActions.GetAction(model));
    }
}