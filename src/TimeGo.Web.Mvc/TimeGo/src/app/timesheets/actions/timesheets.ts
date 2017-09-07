import { Action } from '@ngrx/store';
import { Timesheets } from '../models/timesheets.model'
import { Period } from '../models/period.model'
import { AddModel } from '../models/add.model'
import { Task } from '../models/task.model'
import { TimesheetsLine } from '../models/timesheets-line.model'
import { SelectModel } from '../models/select-period.model'
import { UsersListItem } from '../../users/models/users-list-item.model'

export const APPROVE = '[Timesheets] Approve Timesheets';
export const APPROVE_COMPLETE = '[Timesheets] Approve Timesheets Complete';
export const SUBMIT = '[Timesheets] Submit Timesheets';
export const SUBMIT_COMPLETE = '[Timesheets] Submit Timesheets Complete';
export const REQUEST_TO_UNLOCK = '[Timesheets] Request to Unlock Timesheets';
export const REQUEST_TO_UNLOCK_COMPLETE = '[Timesheets] Request to Unlock Timesheets Complete';
export const GET = '[Timesheets] Get Timesheets';
export const GET_COMPLETE = '[Timesheets] Get Timesheets Complete';
export const GET_PERIODS = '[Timesheets] Get periods';
export const GET_PERIODS_COMPLETE = '[Timesheets] Get periods Complete';
export const GET_Tasks = '[Timesheets] Get Tasks';
export const GET_Tasks_COMPLETE = '[Timesheets] Get Tasks Complete';
export const GET_USERS = '[Timesheets] Get Users';
export const GET_USERS_COMPLETE = '[Timesheets] Get Users Complete';
export const ADD = '[Timesheets] Add time line';
export const ADD_COMPLETE = '[Timesheets] Add time line Complete';
export const DELETE = '[Timesheets] Delete time line';
export const EDIT = '[Timesheets] Edit time line';
export const EDIT_COMPLETE = '[Timesheets] Edit time line Complete';
export const CHANGE_STATUS = '[Timesheets] Change status';
export const CHANGE_STATUS_COMPLETE = '[Timesheets] Change status Complete';

export class GetAction implements Action {
    type = GET;
    constructor(public payload: SelectModel) { }
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

export class GetUsersAction implements Action {
    type = GET_USERS;
    constructor(public payload: any) { }
}

export class GetUsersCompleteAction implements Action {
    type = GET_USERS_COMPLETE;

    constructor(public payload: UsersListItem[]) { }
}

export class AddAction implements Action {
    type = ADD;

    constructor(public payload: Date) { }
}

export class DeleteAction implements Action {
    type = DELETE;

    constructor(public payload: TimesheetsLine) { }
}

export class EditAction implements Action {
    type = EDIT;

    constructor(public payload: AddModel) { }
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

export class ApproveAction implements Action {
    type = APPROVE;
    constructor(public payload: number) { }
}

export class ApproveCompleteAction implements Action {
    type = APPROVE_COMPLETE;
    constructor(public payload: any) { }
}

export class SubmitAction implements Action {
    type = SUBMIT;
    constructor(public payload: number) { }
}

export class SubmitCompleteAction implements Action {
    type = SUBMIT_COMPLETE;
    constructor(public payload: any) { }
}

export class ToUnlockAction implements Action {
    type = REQUEST_TO_UNLOCK;
    constructor(public payload: number) { }
}

export class ToUnlockCompleteAction implements Action {
    type = REQUEST_TO_UNLOCK_COMPLETE;
    constructor(public payload: any) { }
}

export type Actions = GetAction
    | GetCompleteAction
    | AddAction
    | ChangeStatusAction
    | ChangeStatusCompleteAction
    | EditAction
    | EditCompleteAction
    | GetPeriodAction
    | GetPeriodCompleteAction
    | GetTasksAction
    | GetTasksCompleteAction
    | DeleteAction
    | GetUsersAction
    | GetUsersCompleteAction
    | ApproveCompleteAction
    | ApproveAction
    | SubmitAction
    | SubmitCompleteAction
    | ToUnlockAction
    | ToUnlockCompleteAction;