import { createSelector } from '@ngrx/store';
import { TasksList } from '../models/tasks-list.model'
import { TasksListItem } from '../models/tasks-list-item.model'
import * as tasksActions from '../actions/tasks';
import { TasksListPagingModel } from "../models/tasks-list-paging.model";

export interface State {
    tasks: TasksListItem[];
    isLoaded: boolean;
    loading: boolean;
    pagingModel: TasksListPagingModel;
}

export const initialState: State = {
    tasks: [],
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
    action: tasksActions.Actions
): State {
    switch (action.type) {
        case tasksActions.GET:
            const pagingModel = action.payload as TasksListPagingModel;
            pagingModel.IsAscending = !pagingModel.IsOrder ? state.pagingModel.IsAscending : pagingModel != null && pagingModel.orderBy != "id" ? pagingModel.orderBy != state.pagingModel.orderBy || !state.pagingModel.IsAscending : true;
            {
                return {
                    tasks: state.tasks,
                    isLoaded: true,
                    loading: true,
                    pagingModel: pagingModel,
                };
            }

        case tasksActions.GET_COMPLETE: {
            const loadedPeriods = action.payload as TasksList;
            return {
                tasks: loadedPeriods.Results,
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

        case tasksActions.ADD:
            {
                return {
                    tasks: state.tasks,
                    isLoaded: true,
                    loading: true,
                    pagingModel: state.pagingModel,
                };
            }

        case tasksActions.ADD_COMPLETE: {
            return {
                tasks: state.tasks,
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

export const getTasks = (state: State) => state.tasks;
export const getLoadingStatus = (state: State) => state.loading;
export const getIsLoadedStatus = (state: State) => state.isLoaded;
export const getPagingModel = (state: State) => state.pagingModel;


