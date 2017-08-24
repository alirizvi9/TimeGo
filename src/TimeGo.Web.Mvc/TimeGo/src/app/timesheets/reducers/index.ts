import {
ActionReducerMap,
createSelector,
createFeatureSelector,
compose,
ActionReducer,
combineReducers,
Action,
ActionReducerFactory,
MemoizedSelector,
} from '@ngrx/store';

import * as fromTimesheets from './timesheets';

export interface TimesheetsState {
    timesheetsPage: fromTimesheets.State;
}

export interface State extends fromTimesheets.State {
    'timesheetsPage': TimesheetsState;
}

export const reducers = {
    timesheetsPage: fromTimesheets.reducer
};

export const getTimesheetsState = createFeatureSelector<TimesheetsState>('timesheetsPage');
export const getTimesheetsEntityState = createSelector(
    getTimesheetsState,
    (state: TimesheetsState) => state.timesheetsPage
);

export const getPeriods = createSelector(
    getTimesheetsEntityState,
    fromTimesheets.getPeriods
);

export const getTimesheet = createSelector(
    getTimesheetsEntityState,
    fromTimesheets.getTimesheet
);
export const getLoadingStatus = createSelector(
    getTimesheetsEntityState,
    fromTimesheets.getLoadingStatus
);
export const getIsLoadedStatus = createSelector(
    getTimesheetsEntityState,
    fromTimesheets.getIsLoadedStatus
);

export const getTasks = createSelector(
    getTimesheetsEntityState,
    fromTimesheets.getTasks
);