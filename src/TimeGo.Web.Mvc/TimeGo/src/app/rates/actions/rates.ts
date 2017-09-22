import { Action } from '@ngrx/store';
import { RatesList } from '../models/rates-list.model'
import { RatesListPagingModel } from '../models/rates-list-paging.model';
import { AddRate } from '../models/add-rates.model';
import { DeleteRateModel } from '../models/delete.model'
import { UsersListItem } from '../../users/models/users-list-item.model'

export const GET = '[Rates] Get rates';
export const GET_COMPLETE = '[Rates] Get rates Complete';
export const GET_USERS = '[Rates] Get users';
export const GET_USERS_COMPLETE = '[Rates] Get users Complete';
export const ADD = '[Rates] Add rate';
export const ADD_COMPLETE = '[Rates] Add rate Complete';
export const DELETE = '[Rates] Delete rate';

export class GetAction implements Action {
    type = GET;
    constructor(public payload: RatesListPagingModel) { }
}

export class GetCompleteAction implements Action {
    type = GET_COMPLETE;

    constructor(public payload: RatesList) { }
}

export class GetUsersAction implements Action {
    type = GET_USERS;
    constructor(public payload: any) { }
}

export class GetUsersCompleteAction implements Action {
    type = GET_USERS_COMPLETE;

    constructor(public payload: UsersListItem[]) { }
}

export class SaveAction implements Action {
    type = ADD;

    constructor(public payload: AddRate) { }
}

export class SaveCompleteAction implements Action {
    type = ADD_COMPLETE;

    constructor(public payload: any[]) { }
}

export class DeleteAction implements Action {
    type = DELETE;
    constructor(public payload: DeleteRateModel) { }
}

export type Actions = GetAction
    | GetCompleteAction
    | SaveAction
    | SaveCompleteAction
    | DeleteAction;