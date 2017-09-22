import { createSelector } from '@ngrx/store';
import { RatesList } from '../models/rates-list.model'
import { RatesListItem } from '../models/rates-list-item.model'
import * as ratesActions from '../actions/rates';
import { RatesListPagingModel } from "../models/rates-list-paging.model";
import { UsersListItem } from '../../users/models/users-list-item.model';

export interface State {
    rates: RatesListItem[];
    isLoaded: boolean;
    loading: boolean;
    pagingModel: RatesListPagingModel;
    users: UsersListItem[]
}

export const initialState: State = {
    rates: [],
    isLoaded: false,
    loading: false,
    pagingModel: {
        orderBy: "id",
        page: 1,
        pageSize: 10,
        IsAscending: true,
        count: 10,
        IsOrder: true
    },
    users: []
};

export function reducer(
    state = initialState,
    action: ratesActions.Actions
): State {
    switch (action.type) {
        case ratesActions.GET:
            const pagingModel = action.payload as RatesListPagingModel;
            pagingModel.IsAscending = !pagingModel.IsOrder ? state.pagingModel.IsAscending : pagingModel != null && pagingModel.orderBy != "id" ? pagingModel.orderBy != state.pagingModel.orderBy || !state.pagingModel.IsAscending : true;
            {
                return {
                    rates: state.rates,
                    isLoaded: true,
                    loading: true,
                    pagingModel: pagingModel,
                    users: state.users
                };
            }

        case ratesActions.GET_COMPLETE: {
            const loadedRates = action.payload as RatesList;
            return {
                rates: loadedRates.Results,
                isLoaded: true,
                loading: false,
                pagingModel: {
                    IsAscending: state.pagingModel.IsAscending,
                    count: loadedRates.Count,
                    orderBy: state.pagingModel.orderBy,
                    page: state.pagingModel.page,
                    pageSize: state.pagingModel.pageSize,
                    IsOrder: true
                },
                users: state.users
            };
        }

        case ratesActions.GET_USERS: {
            return {
                rates: state.rates,
                isLoaded: true,
                loading: true,
                pagingModel: state.pagingModel,
                users: state.users
            };
        }

        case ratesActions.GET_USERS_COMPLETE: {
            const loadedUsers = action.payload as UsersListItem[];
            return {
                rates: state.rates,
                isLoaded: true,
                loading: false,
                pagingModel: state.pagingModel,
                users: loadedUsers
            };
        }

        case ratesActions.ADD:
            {
                return {
                    rates: state.rates,
                    isLoaded: true,
                    loading: true,
                    pagingModel: state.pagingModel,
                    users: state.users
                };
            }

        case ratesActions.ADD_COMPLETE: {
            return {
                rates: state.rates,
                isLoaded: true,
                loading: false,
                pagingModel: state.pagingModel,
                users: state.users
            };
        }

        default: {
            return state;
        }
    }
}

export const getRates = (state: State) => state.rates;
export const getLoadingStatus = (state: State) => state.loading;
export const getIsLoadedStatus = (state: State) => state.isLoaded;
export const getPagingModel = (state: State) => state.pagingModel;
export const getUsers = (state: State) => state.users;


