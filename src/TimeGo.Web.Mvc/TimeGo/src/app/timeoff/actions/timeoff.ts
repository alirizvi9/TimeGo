import { Action } from '@ngrx/store';
import { TimeoffListItem } from '../models/timeoff-list-item.model'
import { TimeoffListPagingModel } from '../models/timeoff-list-paging.model';
import { AddTimeoff } from '../models/add-timeoff.model';

export const GET = '[Timeoff] Get timeoff requests';
export const GET_COMPLETE = '[Timeoff] Get Complete';
export const ADD = '[Timeoff] Add timeoff request';
export const ADD_COMPLETE = '[Timeoff] Add timeoff request Complete';

export class GetAction implements Action {
    type = GET;
    constructor(public payload: TimeoffListPagingModel) { }
}

export class GetCompleteAction implements Action {
    type = GET_COMPLETE;

    constructor(public payload: TimeoffListItem[]) { }
}

export class SaveAction implements Action {
    type = ADD;

    constructor(public payload: AddTimeoff) { }
}

export class SaveCompleteAction implements Action {
    type = ADD_COMPLETE;

    constructor(public payload: any[]) { }
}

export type Actions = GetAction
    | GetCompleteAction
    | SaveAction
    | SaveCompleteAction;