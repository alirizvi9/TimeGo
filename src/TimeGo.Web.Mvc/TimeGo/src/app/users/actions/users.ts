import { Action } from '@ngrx/store';
import {UsersListItem} from '../models/users-list-item.model'
import { UsersListPagingModel } from '../models/users-list-paging.model';
import { UsersList } from "../models/user-list.model";
import { AddEmployee } from '../models/add-employee.model';
import { InviteEmployee } from '../models/invite-employee.model';

export const GET = '[Users] Get users';
export const GET_COMPLETE = '[Users] Get Complete';
export const ADD = '[Users] Add user';
export const ADD_COMPLETE = '[Users] Add User Complete';
export const EDIT = '[Users] Edit user';
export const EDIT_COMPLETE = '[Users] Edit User Complete';
export const INVITE = '[Users] Invite user';
export const INVITE_COMPLETE = '[Users] Invite User Complete';
export const REINVITE = '[Users] ReInvite user';
export const REINVITE_COMPLETE = '[Users] ReInvite user Complete';


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
    constructor(public payload: AddEmployee) { }
}

export class SaveCompleteAction implements Action {
    type = ADD_COMPLETE;

    constructor(public payload: any) { }
}

export class EditAction implements Action {
    type = EDIT;
    constructor(public payload: UsersListItem) { }
}

export class EditCompleteAction implements Action {
    type = EDIT_COMPLETE;

    constructor(public payload: any) { }
}

export class InviteAction implements Action {
    type = INVITE;

    constructor(public payload: InviteEmployee) { }
}

export class InviteCompleteAction implements Action {
    type = INVITE_COMPLETE;

    constructor(public payload: any) { }
}

export class ReInviteAction implements Action {
    type = REINVITE;

    constructor(public payload: number) { }
}

export class ReInviteCompleteAction implements Action {
    type = REINVITE_COMPLETE;

    constructor(public payload: any) { }
}

export type Actions = GetAction
    | GetCompleteAction
    | SaveAction
    | SaveCompleteAction
    | InviteAction
    | InviteCompleteAction
    | EditAction
    | EditCompleteAction
    | ReInviteAction
    | ReInviteCompleteAction;