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

import * as fromUsers from './users';

export interface UsersState {
    usersPage: fromUsers.State;
}

export interface State extends fromUsers.State {
    'usersPage': UsersState;
}

export const reducers = {
    usersPage: fromUsers.reducer
};

export const getUsersState = createFeatureSelector<UsersState>('usersPage');
export const getUsersEntityState = createSelector(
    getUsersState,
    (state: UsersState) => state.usersPage
);
export const getUsersList = createSelector(
    getUsersEntityState,
    fromUsers.getUsers
);
export const getLoadingStatus = createSelector(
    getUsersEntityState,
    fromUsers.getLoadingStatus
);
export const getIsLoadedStatus = createSelector(
    getUsersEntityState,
    fromUsers.getIsLoadedStatus
);