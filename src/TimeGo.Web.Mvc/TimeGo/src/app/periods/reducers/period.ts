import { createSelector } from '@ngrx/store';
import { PeriodList } from '../models/period-list.model'
import { PeriodListItem } from '../models/period-list-item.model'
import * as periodActions from '../actions/period';
import { PeriodListPagingModel } from "../models/period-list-paging.model";

export interface State {
    periods: PeriodListItem[];
    isLoaded: boolean;
    loading: boolean;
    pagingModel: PeriodListPagingModel;
}

export const initialState: State = {
    periods: [],
    isLoaded: false,
    loading: false,
    pagingModel: {
        orderBy: "id",
        page: 1,
        pageSize: 10,
        IsAscending: true,
        count: 10,
        IsOrder: true
    }
};

export function reducer(
    state = initialState,
    action: periodActions.Actions
): State {
    switch (action.type) {
        case periodActions.GET:
            const pagingModel = action.payload as PeriodListPagingModel;
            pagingModel.IsAscending = !pagingModel.IsOrder ? state.pagingModel.IsAscending : pagingModel != null && pagingModel.orderBy != "id" ? pagingModel.orderBy != state.pagingModel.orderBy || !state.pagingModel.IsAscending : true;
            {
                return {
                    periods: state.periods,
                    isLoaded: true,
                    loading: true,
                    pagingModel: pagingModel,
                };
            }

        case periodActions.GET_COMPLETE: {
            const loadedPeriods = action.payload as PeriodList;
            return {
                periods: loadedPeriods.Results,
                isLoaded: true,
                loading: false,
                pagingModel: {
                    IsAscending: state.pagingModel.IsAscending,
                    count: loadedPeriods.Count,
                    orderBy: state.pagingModel.orderBy,
                    page: state.pagingModel.page,
                    pageSize: state.pagingModel.pageSize,
                    IsOrder: true
                }
            };
        }

        case periodActions.ADD:
            {
                return {
                    periods: state.periods,
                    isLoaded: true,
                    loading: true,
                    pagingModel: state.pagingModel,
                };
            }

        case periodActions.ADD_COMPLETE: {
            return {
                periods: state.periods,
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

export const getPeriods = (state: State) => state.periods;
export const getLoadingStatus = (state: State) => state.loading;
export const getIsLoadedStatus = (state: State) => state.isLoaded;
export const getPagingModel = (state: State) => state.pagingModel;


