import { createSelector } from '@ngrx/store';
import { Timesheets } from '../models/timesheets.model'
import { Period } from '../models/period.model'
import { Task } from '../models/task.model'
import { TimesheetsLine } from '../models/timesheets-line.model'
import * as timesheetsActions from '../actions/timesheets';

export interface State {
    timesheet: Timesheets;
    periods: Period[];
    periodId: number;
    isLoaded: boolean;
    loading: boolean;
    tasks: Task[];
}

export const initialState: State = {
    timesheet: null,
    isLoaded: false,
    loading: false,
    periods: [],
    periodId: 0,
    tasks: []
};

export function reducer(
    state = initialState,
    action: timesheetsActions.Actions
): State {
    switch (action.type) {
        case timesheetsActions.GET:
            {
                const periodId = action.payload as number;
                return {
                    timesheet: state.timesheet,
                    isLoaded: true,
                    loading: true,
                    periods: state.periods,
                    periodId: periodId,
                    tasks: state.tasks
                };
            }

        case timesheetsActions.GET_COMPLETE: {
            const timesheet = action.payload as Timesheets;
            return {
                timesheet: timesheet,
                isLoaded: true,
                loading: false,
                periods: state.periods,
                periodId: state.periodId,
                tasks: state.tasks
            };
        }

        case timesheetsActions.GET_PERIODS:
            {
                return {
                    timesheet: state.timesheet,
                    isLoaded: true,
                    loading: false,
                    periods: state.periods,
                    periodId: state.periodId,
                    tasks: state.tasks
                };
            }

        case timesheetsActions.GET_PERIODS_COMPLETE: {
            const periods = action.payload as Period[];
            return {
                timesheet: state.timesheet,
                isLoaded: true,
                loading: false,
                periods: periods,
                periodId: state.periodId,
                tasks: state.tasks
            };
        }
        case timesheetsActions.GET_Tasks:
            {
                return {
                    timesheet: state.timesheet,
                    isLoaded: true,
                    loading: false,
                    periods: state.periods,
                    periodId: state.periodId,
                    tasks: state.tasks
                };
            }

        case timesheetsActions.GET_Tasks_COMPLETE: {
            const tasks = action.payload as Task[];
            return {
                timesheet: state.timesheet,
                isLoaded: true,
                loading: false,
                periods: state.periods,
                periodId: state.periodId,
                tasks: tasks
            };
        }

        case timesheetsActions.ADD: {
            const date = action.payload as Date;
            let lines = state.timesheet.Lines;
            const newLine: TimesheetsLine = {
                Date: date,
                EndTime: new Date(),
                Id: 0,
                StartTime: new Date(),
                Task: "",
                TaskId: 0
            }
            lines.push(newLine);
            lines = lines.sort((obj1, obj2) => {
                if (obj1.Date > obj2.Date) {
                    return 1;
                }

                if (obj1.Date < obj2.Date) {
                    return -1;
                }

                return 0;
            });
            const timesheet = state.timesheet;
            timesheet.Lines = lines;
            return {
                timesheet: timesheet,
                isLoaded: true,
                loading: false,
                periods: state.periods,
                periodId: state.periodId,
                tasks: state.tasks
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
export const getTimesheet = (state: State) => state.timesheet;
export const getTasks = (state: State) => state.tasks;


