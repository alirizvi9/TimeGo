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

import * as fromTasks from './tasks';

export interface TasksState {
    tasksPage: fromTasks.State;
}

export interface State extends fromTasks.State {
    'tasksPage': TasksState;
}

export const reducers = {
    tasksPage: fromTasks.reducer
};

export const getTasksState = createFeatureSelector<TasksState>('tasksPage');
export const getTasksEntityState = createSelector(
    getTasksState,
    (state: TasksState) => state.tasksPage
);
export const getTasks = createSelector(
    getTasksEntityState,
    fromTasks.getTasks
);
export const getLoadingStatus = createSelector(
    getTasksEntityState,
    fromTasks.getLoadingStatus
);
export const getIsLoadedStatus = createSelector(
    getTasksEntityState,
    fromTasks.getIsLoadedStatus
);
export const getPagingModel = createSelector(
    getTasksEntityState,
    fromTasks.getPagingModel
);