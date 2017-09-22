import 'rxjs/add/operator/take';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as fromUsers from '../reducers';
import * as usersActions from '../actions/users';

import { AddEmployee } from '../models/add-employee.model';
import {UsersListPagingModel} from '../models/users-list-paging.model';
import {UsersListItem} from '../models/users-list-item.model';

@Component({
    selector: 'users-page',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
    <up-users-list [users]="users$ | async" [pagingModel]="pagingModel$ | async" [isLoaded]="isLoaded$ | async" [loading]="loading$ | async" (order)="orderUser($event)" (changePage)="changePage($event)" (invite)="invite($event)" (add)="add($event)"></up-users-list>
  `,
})
export class UsersPageComponent {
    users$: Observable<UsersListItem[]>;
    isLoaded$: Observable<boolean>;
    loading$: Observable<boolean>;
    pagingModel$: Observable<UsersListPagingModel>;

    constructor(private store: Store<fromUsers.State>) {
        this.users$ = store.select(fromUsers.getUsersList);
        this.isLoaded$ = store.select(fromUsers.getIsLoadedStatus);
        this.loading$ = store.select(fromUsers.getLoadingStatus);
        this.pagingModel$ = store.select(fromUsers.getPagingModel);
    }

    ngOnInit() {
        let pagingModelView: UsersListPagingModel = {
            orderBy: "id",
            page: 1,
            pageSize: 10,
            IsAscending: true,
            count: 1,
            IsOrder: true
        }
        this.store.dispatch(new usersActions.GetAction(pagingModelView));
    }
    
    orderUser(orderBy: string) {
        let pagingModelView: UsersListPagingModel = {
            orderBy: orderBy,
            page: 1,
            pageSize: 10,
            IsAscending: true,
            count: 1,
            IsOrder: true
        }
        this.store.dispatch(new usersActions.GetAction(pagingModelView));
    }

    changePage(model: UsersListPagingModel)
    {
        this.store.dispatch(new usersActions.GetAction(model));
    }

    add(model: AddEmployee)
    {
        this.store.dispatch(new usersActions.SaveAction(model));
    }

    invite(email: string)
    {
        this.store.dispatch(new usersActions.InviteAction(email));
    }
}