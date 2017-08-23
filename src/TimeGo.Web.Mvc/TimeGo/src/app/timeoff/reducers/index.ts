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

import * as fromTimeoff from './timeoff';

export interface TimeoffState {
    timeoffPage: fromTimeoff.State;
}

export interface State extends fromTimeoff.State {
    'timeoffPage': TimeoffState;
}

export const reducers = {
    timeoffPage: fromTimeoff.reducer
};

export const getTimeoffState = createFeatureSelector<TimeoffState>('timeoffPage');
export const getTimeoffEntityState = createSelector(
    getTimeoffState,
    (state: TimeoffState) => state.timeoffPage
);
export const getTimeoffRequests = createSelector(
    getTimeoffEntityState,
    fromTimeoff.getTimeoffRequests
);
export const getLoadingStatus = createSelector(
    getTimeoffEntityState,
    fromTimeoff.getLoadingStatus
);
export const getIsLoadedStatus = createSelector(
    getTimeoffEntityState,
    fromTimeoff.getIsLoadedStatus
);
export const getPagingModel = createSelector(
    getTimeoffEntityState,
    fromTimeoff.getPagingModel
);