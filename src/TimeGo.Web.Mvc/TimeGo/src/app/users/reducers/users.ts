import { createSelector } from '@ngrx/store';
import {UsersListItem} from '../models/users-list-item.model'
import * as usersActions from '../actions/users';

export interface State {
    users: UsersListItem[];
    isLoaded: boolean;
    loading: boolean;
}

export const initialState: State = {
    users: [],
    isLoaded: false,
    loading: false
};

export function reducer(
    state = initialState,
    action: usersActions.Actions
): State {
    switch (action.type) {
        case usersActions.GET:
            {
                return {
                    users: state.users,
                    isLoaded: true,
                    loading: true
                };
            }

        case usersActions.GET_COMPLETE: {
            const loadedUsers = action.payload as UsersListItem[];
            return {
                users: loadedUsers,
                isLoaded: true,
                loading: false
            };
        }

        default: {
            return state;
        }
    }
}

export const getUsers = (state: State) => state.users;
export const getLoadingStatus = (state: State) => state.loading;
export const getIsLoadedStatus = (state: State) => state.isLoaded;

