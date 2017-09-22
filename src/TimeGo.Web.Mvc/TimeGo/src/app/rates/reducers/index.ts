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

import * as fromRates from './rates';

export interface RatesState {
    ratesPage: fromRates.State;
}

export interface State extends fromRates.State {
    'ratesPage': RatesState;
}

export const reducers = {
    ratesPage: fromRates.reducer
};

export const getRatesState = createFeatureSelector<RatesState>('ratesPage');
export const getRatesEntityState = createSelector(
    getRatesState,
    (state: RatesState) => state.ratesPage
);
export const getRates = createSelector(
    getRatesEntityState,
    fromRates.getRates
);
export const getLoadingStatus = createSelector(
    getRatesEntityState,
    fromRates.getLoadingStatus
);
export const getIsLoadedStatus = createSelector(
    getRatesEntityState,
    fromRates.getIsLoadedStatus
);
export const getPagingModel = createSelector(
    getRatesEntityState,
    fromRates.getPagingModel
);

export const getUsers = createSelector(
    getRatesEntityState,
    fromRates.getUsers
);