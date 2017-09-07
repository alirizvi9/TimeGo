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

import * as fromPeriod from './period';

export interface PeriodState {
    periodPage: fromPeriod.State;
}

export interface State extends fromPeriod.State {
    'periodPage': PeriodState;
}

export const reducers = {
    periodPage: fromPeriod.reducer
};

export const getPeriodState = createFeatureSelector<PeriodState>('periodPage');
export const getPeriodEntityState = createSelector(
    getPeriodState,
    (state: PeriodState) => state.periodPage
);
export const getPeriods = createSelector(
    getPeriodEntityState,
    fromPeriod.getPeriods
);
export const getLoadingStatus = createSelector(
    getPeriodEntityState,
    fromPeriod.getLoadingStatus
);
export const getIsLoadedStatus = createSelector(
    getPeriodEntityState,
    fromPeriod.getIsLoadedStatus
);
export const getPagingModel = createSelector(
    getPeriodEntityState,
    fromPeriod.getPagingModel
);