import { Action } from '@ngrx/store';
import {UsersListItem} from '../models/users-list-item.model'
import { UsersListPagingModel } from '../models/users-list-paging.model';
import { UsersList } from "../models/user-list.model";

export const GET = '[Users] Get users';
export const GET_COMPLETE = '[Users] Get Complete';
export const ADD = '[Users] Add user';
export const ADD_COMPLETE = '[Users] Add User Complete';

export class GetAction implements Action {
    type = GET;
    constructor(public payload: UsersListPagingModel) { }
}

export class GetCompleteAction implements Action {
    type = GET_COMPLETE;

    constructor(public payload: UsersList) { }
}

export class SaveAction implements Action {
    type = ADD;

    constructor(public payload: UsersListItem) { }
}

export class SaveCompleteAction implements Action {
    type = ADD_COMPLETE;

    constructor(public payload: UsersListItem) { }
}

export type Actions = GetAction
    | GetCompleteAction
    | SaveAction
    | SaveCompleteAction;