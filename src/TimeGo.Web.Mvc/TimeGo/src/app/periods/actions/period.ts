import { Action } from '@ngrx/store';
import { PeriodListItem } from '../models/period-list-item.model'
import { PeriodList } from '../models/period-list.model'
import { PeriodListPagingModel } from '../models/period-list-paging.model';
import { AddPeriod } from '../models/add-period.model';
import { ChangeStatus } from '../models/chagne-status-period.model'
import { DeletePeriodModel } from '../models/delete.model'

export const GET = '[Period] Get periods';
export const GET_COMPLETE = '[Period] Get Complete';
export const ADD = '[Period] Add period';
export const ADD_COMPLETE = '[Period] Add period Complete';
export const EDIT = '[Period] Edit period';
export const EDIT_COMPLETE = '[Period] Edit period Complete';
export const CHANGE_STATUS = '[Period] Change status';
export const CHANGE_STATUS_COMPLETE = '[Period] Change status Complete';
export const DELETE = '[Period] Delete period';

export class GetAction implements Action {
    type = GET;
    constructor(public payload: PeriodListPagingModel) { }
}

export class GetCompleteAction implements Action {
    type = GET_COMPLETE;

    constructor(public payload: PeriodList) { }
}

export class SaveAction implements Action {
    type = ADD;

    constructor(public payload: AddPeriod) { }
}

export class SaveCompleteAction implements Action {
    type = ADD_COMPLETE;

    constructor(public payload: any[]) { }
}

export class EditAction implements Action {
    type = EDIT;

    constructor(public payload: PeriodListItem) { }
}

export class EditCompleteAction implements Action {
    type = EDIT_COMPLETE;

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

export class DeleteAction implements Action {
    type = DELETE;
    constructor(public payload: DeletePeriodModel) { }
}

export type Actions = GetAction
    | GetCompleteAction
    | SaveAction
    | SaveCompleteAction
    | ChangeStatusAction
    | ChangeStatusCompleteAction
    | DeleteAction
    | EditAction
    | EditCompleteAction;