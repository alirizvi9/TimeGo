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
import { UsersListItem } from '../models/users-list-item.model';
import { UsersList } from '../models/user-list.model';
import { UsersListPagingModel } from '../models/users-list-paging.model';
import { AddEmployee } from '../models/add-employee.model';
import { InviteEmployee } from '../models/invite-employee.model';

@Injectable()
export class UsersEffects {

    pagingModel: UsersListPagingModel;

    @Effect()
    get$: Observable<Action> = this.actions$
        .ofType(usersActions.GET)
        .map(toPayload)
        .switchMap((query: UsersListPagingModel) => {
            const nextGet$ = this.actions$.ofType(usersActions.GET).skip(1);
            this.pagingModel = query;
            return this.usersService
                .getUsersList(query)
                .takeUntil(nextGet$)
                .map((users: UsersList) => new usersActions.GetCompleteAction(users))
                .catch(() => of(new usersActions.GetCompleteAction(null)));
        });

    @Effect()
    add$: Observable<Action> = this.actions$
        .ofType(usersActions.ADD)
        .map(toPayload)
        .switchMap((query: AddEmployee) => {
            const nextGet$ = this.actions$.ofType(usersActions.ADD).skip(1);
            return this.usersService
                .addEmployee(query)
                .takeUntil(nextGet$)
                .map((result: any) => new usersActions.SaveCompleteAction(result))
                .catch(() => of(new usersActions.SaveCompleteAction(null)));
        });

    @Effect()
    invite$: Observable<Action> = this.actions$
        .ofType(usersActions.INVITE)
        .map(toPayload)
        .switchMap((query: InviteEmployee) => {
            const nextGet$ = this.actions$.ofType(usersActions.INVITE).skip(1);
            return this.usersService
                .inviteEmployee(query)
                .takeUntil(nextGet$)
                .map((result: any) => new usersActions.InviteCompleteAction(result))
                .catch(() => of(new usersActions.InviteCompleteAction(null)));
        });

    @Effect()
    reinvite$: Observable<Action> = this.actions$
        .ofType(usersActions.REINVITE)
        .map(toPayload)
        .switchMap((query: number) => {
            const nextGet$ = this.actions$.ofType(usersActions.REINVITE).skip(1);
            return this.usersService
                .reinviteEmployee(query)
                .takeUntil(nextGet$)
                .map((result: any) => new usersActions.ReInviteCompleteAction(result))
                .catch(() => of(new usersActions.ReInviteCompleteAction(null)));
        });



    @Effect()
    edit$: Observable<Action> = this.actions$
        .ofType(usersActions.EDIT)
        .map(toPayload)
        .switchMap((query: UsersListItem) => {
            const nextGet$ = this.actions$.ofType(usersActions.EDIT).skip(1);
            return this.usersService
                .editEmployee(query)
                .takeUntil(nextGet$)
                .map((result: any) => new usersActions.EditCompleteAction(result))
                .catch(() => of(new usersActions.EditCompleteAction(null)));
        });

    @Effect()
    update$: Observable<Action> = this.actions$
        .ofType(usersActions.ADD_COMPLETE, usersActions.EDIT_COMPLETE, usersActions.INVITE_COMPLETE, usersActions.REINVITE_COMPLETE)
        .map(toPayload)
        .switchMap((query: any) => {
            const nextGet$ = this.actions$.ofType(usersActions.GET_COMPLETE);
            return this.usersService
                .getUsersList(this.pagingModel)
                .takeUntil(nextGet$)
                .map((users: UsersList) => new usersActions.GetCompleteAction(users))
                .catch(() => of(new usersActions.GetCompleteAction(null)));
        });

    constructor(
        private actions$: Actions,
        private usersService: UsersService
    ) { }
}