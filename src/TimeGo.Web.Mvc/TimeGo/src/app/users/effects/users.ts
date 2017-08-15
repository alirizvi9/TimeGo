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

import { UsersService } from '../users.service';
import * as usersActions from '../actions/users';
import {UsersListItem} from '../models/users-list-item.model'
import {UsersListPagingModel} from '../models/users-list-paging.model'

@Injectable()
export class UsersEffects {
    @Effect()
    get$: Observable<Action> = this.actions$
        .ofType(usersActions.GET)
        .map(toPayload)
        .switchMap((query: UsersListPagingModel) => {
            const nextGet$ = this.actions$.ofType(usersActions.GET).skip(1);
            return this.usersService
                .getUsersList(query)
                .takeUntil(nextGet$)
                .map((users: UsersListItem[]) => new usersActions.GetCompleteAction(users))
                .catch(() => of(new usersActions.GetCompleteAction(null)));
        });

    constructor(
        private actions$: Actions,
        private usersService: UsersService
    ) { }
}