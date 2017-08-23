import { Action } from '@ngrx/store';
import { TimeoffList } from '../models/timeoff-list.model'
import { TimeoffListPagingModel } from '../models/timeoff-list-paging.model';
import { AddTimeoff } from '../models/add-timeoff.model';
import { ChangeStatus } from '../models/chagne-status-timeoff.model'

export const GET = '[Timeoff] Get timeoff requests';
export const GET_COMPLETE = '[Timeoff] Get Complete';
export const ADD = '[Timeoff] Add timeoff request';
export const ADD_COMPLETE = '[Timeoff] Add timeoff request Complete';
export const CHANGE_STATUS = '[Timeoff] Change status';
export const CHANGE_STATUS_COMPLETE = '[Timeoff] Change status Complete';

export class GetAction implements Action {
    type = GET;
    constructor(public payload: TimeoffListPagingModel) { }
}

export class GetCompleteAction implements Action {
    type = GET_COMPLETE;

    constructor(public payload: TimeoffList) { }
}

export class SaveAction implements Action {
    type = ADD;

    constructor(public payload: AddTimeoff) { }
}

export class SaveCompleteAction implements Action {
    type = ADD_COMPLETE;

    constructor(public payload: any[]) { }
}

export class ChangeStatusAction implements Action {
    type = CHANGE_STATUS;
    constructor(public payload: ChangeStatus) { }
}

export class ChangeStatusCompleteAction implements Action {
    type = CHANGE_STATUS_COMPLETE;
    constructor(public payload: any) { }
}

export type Actions = GetAction
    | GetCompleteAction
    | SaveAction
    | SaveCompleteAction
    | ChangeStatusAction
    | ChangeStatusCompleteAction;