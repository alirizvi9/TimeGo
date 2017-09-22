import { Action } from '@ngrx/store';
import { TasksList } from '../models/tasks-list.model'
import { TasksListPagingModel } from '../models/tasks-list-paging.model';
import { TasksListItem } from '../models/tasks-list-item.model'
import { AddTask } from '../models/add-task.model';
import { DeleteTaskModel } from '../models/delete.model'

export const GET = '[Task] Get tasks';
export const GET_COMPLETE = '[Task] Get tasks Complete';
export const ADD = '[Task] Add task';
export const ADD_COMPLETE = '[Task] Add task Complete';
export const DELETE = '[Task] Delete task';
export const ALLOW = '[Task] Allow task';
export const ALLOW_COMPLETE = '[Task] Allow task Complete';

export class AllowAction implements Action {
    type = ALLOW;
    constructor(public payload: TasksListItem) { }
}

export class AllowCompleteAction implements Action {
    type = ALLOW_COMPLETE;

    constructor(public payload: any) { }
}

export class GetAction implements Action {
    type = GET;
    constructor(public payload: TasksListPagingModel) { }
}

export class GetCompleteAction implements Action {
    type = GET_COMPLETE;

    constructor(public payload: TasksList) { }
}

export class SaveAction implements Action {
    type = ADD;

    constructor(public payload: AddTask) { }
}

export class SaveCompleteAction implements Action {
    type = ADD_COMPLETE;

    constructor(public payload: any[]) { }
}

export class DeleteAction implements Action {
    type = DELETE;
    constructor(public payload: DeleteTaskModel) { }
}

export type Actions = GetAction
    | GetCompleteAction
    | SaveAction
    | SaveCompleteAction
    | DeleteAction;