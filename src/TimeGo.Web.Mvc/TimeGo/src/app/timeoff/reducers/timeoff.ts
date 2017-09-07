import { createSelector } from '@ngrx/store';
import { TimeoffList } from '../models/timeoff-list.model'
import { TimeoffListItem } from '../models/timeoff-list-item.model'
import * as timeoffActions from '../actions/timeoff';
import { TimeoffListPagingModel } from "../models/timeoff-list-paging.model";

export interface State {
    timeoffRequests: TimeoffListItem[];
    isLoaded: boolean;
    loading: boolean;
    pagingModel: TimeoffListPagingModel;
}

export const initialState: State = {
    timeoffRequests: [],
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
    action: timeoffActions.Actions
): State {
    switch (action.type) {
        case timeoffActions.GET:
            const pagingModel = action.payload as TimeoffListPagingModel;
            pagingModel.IsAscending = !pagingModel.IsOrder ? state.pagingModel.IsAscending : pagingModel != null && pagingModel.orderBy != "id" ? pagingModel.orderBy != state.pagingModel.orderBy || !state.pagingModel.IsAscending : true;
            {
                return {
                    timeoffRequests: state.timeoffRequests,
                    isLoaded: true,
                    loading: true,
                    pagingModel: pagingModel,
                };
            }

        case timeoffActions.GET_COMPLETE: {
            const loadedTimeoffRequests = action.payload as TimeoffList;
            return {
                timeoffRequests: loadedTimeoffRequests.Results,
                isLoaded: true,
                loading: false,
                pagingModel: {
                    IsAscending: state.pagingModel.IsAscending,
                    count: loadedTimeoffRequests.Count,
                    orderBy: state.pagingModel.orderBy,
                    page: state.pagingModel.page,
                    pageSize: state.pagingModel.pageSize,
                    IsOrder: true
                }
            };
        }

        case timeoffActions.ADD:
            {
                return {
                    timeoffRequests: state.timeoffRequests,
                    isLoaded: true,
                    loading: true,
                    pagingModel: state.pagingModel,
                };
            }

        case timeoffActions.ADD_COMPLETE: {
            return {
                timeoffRequests: state.timeoffRequests,
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

export const getTimeoffRequests = (state: State) => state.timeoffRequests;
export const getLoadingStatus = (state: State) => state.loading;
export const getIsLoadedStatus = (state: State) => state.isLoaded;
export const getPagingModel = (state: State) => state.pagingModel;


