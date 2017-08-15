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

import * as fromProfileEdit from './profile-edit';

export interface ProfileState {
    profileEdit: fromProfileEdit.State;
}

export interface State extends fromProfileEdit.State {
    'profile': ProfileState;
}

export const reducers = {
    profileEdit: fromProfileEdit.reducer
};

export const getEditProfileState = createFeatureSelector<ProfileState>('profile');
export const getEditProfileEntityState = createSelector(
    getEditProfileState,
    (state: ProfileState) => state.profileEdit
);
export const getCompanyEntity = createSelector(
    getEditProfileEntityState,
    fromProfileEdit.getCompany
);
export const getLoadingStatus = createSelector(
    getEditProfileEntityState,
    fromProfileEdit.getLoadingStatus
);