import { createSelector } from '@ngrx/store';
import {UsersListItem} from '../models/users-list-item.model'
import * as usersActions from '../actions/users';
import { UsersListPagingModel } from "../models/users-list-paging.model";

export interface State {
    users: UsersListItem[];
    isLoaded: boolean;
    loading: boolean;
    pagingModel: UsersListPagingModel;
}

export const initialState: State = {
    users: [],
    isLoaded: false,
    loading: false,
    pagingModel: {
        orderBy: "id",
        page: 1,
        pageSize: 10,
        IsAscending: true
    }
};

export function reducer(
    state = initialState,
    action: usersActions.Actions
): State {
    switch (action.type) {
        case usersActions.GET:
            const pagingModel = action.payload as UsersListPagingModel;
            pagingModel.IsAscending = pagingModel != null ? pagingModel.orderBy != state.pagingModel.orderBy || !state.pagingModel.IsAscending : true;
            {
                return {
                    users: state.users,
                    isLoaded: true,
                    loading: true,
                    pagingModel: pagingModel,
                };
            }

        case usersActions.GET_COMPLETE: {
            const loadedUsers = action.payload as UsersListItem[];
            return {
                users: loadedUsers,
                isLoaded: true,
                loading: false,
                pagingModel: state.pagingModel
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
export const getPagingModel = (state: State) => state.pagingModel;


