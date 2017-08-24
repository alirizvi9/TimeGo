import { Action } from '@ngrx/store';
import { Timesheets } from '../models/timesheets.model'
import { Period } from '../models/period.model'
import { Task } from '../models/task.model'
import { TimesheetsLine } from '../models/timesheets-line.model'

export const GET = '[Timesheets] Get Timesheets';
export const GET_COMPLETE = '[Timesheets] Get Timesheets Complete';
export const GET_PERIODS = '[Timesheets] Get periods';
export const GET_PERIODS_COMPLETE = '[Timesheets] Get periods Complete';
export const GET_Tasks = '[Timesheets] Get Tasks';
export const GET_Tasks_COMPLETE = '[Timesheets] Get Tasks Complete';
export const ADD = '[Timesheets] Add time line';
export const ADD_COMPLETE = '[Timesheets] Add time line Complete';
export const EDIT = '[Timesheets] Edit time line';
export const EDIT_COMPLETE = '[Timesheets] Edit time line Complete';
export const CHANGE_STATUS = '[Timesheets] Change status';
export const CHANGE_STATUS_COMPLETE = '[Timesheets] Change status Complete';

export class GetAction implements Action {
    type = GET;
    constructor(public payload: number) { }
}

export class GetCompleteAction implements Action {
    type = GET_COMPLETE;

    constructor(public payload: Timesheets) { }
}

export class GetPeriodAction implements Action {
    type = GET_PERIODS;
    constructor(public payload: any) { }
}

export class GetPeriodCompleteAction implements Action {
    type = GET_PERIODS_COMPLETE;

    constructor(public payload: Period[]) { }
}

export class GetTasksAction implements Action {
    type = GET_Tasks;
    constructor(public payload: any) { }
}

export class GetTasksCompleteAction implements Action {
    type = GET_Tasks_COMPLETE;

    constructor(public payload: Task[]) { }
}

export class SaveAction implements Action {
    type = ADD;

    constructor(public payload: TimesheetsLine) { }
}

export class SaveCompleteAction implements Action {
    type = ADD_COMPLETE;

    constructor(public payload: any[]) { }
}

export class EditAction implements Action {
    type = EDIT;

    constructor(public payload: TimesheetsLine) { }
}

export class EditCompleteAction implements Action {
    type = EDIT_COMPLETE;

    constructor(public payload: any[]) { }
}

export class ChangeStatusAction implements Action {
    type = CHANGE_STATUS;
    constructor(public payload: any) { }
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
    | ChangeStatusCompleteAction
    | EditAction
    | EditCompleteAction
    | GetPeriodAction
    | GetPeriodCompleteAction
    | GetTasksAction
    | GetTasksCompleteAction;