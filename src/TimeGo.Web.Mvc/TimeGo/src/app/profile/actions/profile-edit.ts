import { Action } from '@ngrx/store';
import {CompanyProfile} from '../models/company-profile.model';

export const GET = '[Profile Edit] Get';
export const GET_COMPLETE = '[Profile Edit] Get Complete';
export const SAVE = '[Profile Edit] Save';
export const SAVE_COMPLETE = '[Profile Edit] Save Complete';

export class GetAction implements Action {
    type = GET;
    constructor(public payload: any = null) { }
}

export class GetCompleteAction implements Action {
    type = GET_COMPLETE;

    constructor(public payload: CompanyProfile) { }
}

export class SaveAction implements Action {
    type = SAVE;

    constructor(public payload: CompanyProfile) { }
}

export class SaveCompleteAction implements Action {
    type = SAVE_COMPLETE;

    constructor(public payload: any = null) { }
}

export type Actions = GetAction
    | GetCompleteAction
    | SaveAction
    | SaveCompleteAction;