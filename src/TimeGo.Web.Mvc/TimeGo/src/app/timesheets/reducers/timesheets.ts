import { createSelector } from '@ngrx/store';
import { Timesheets } from '../models/timesheets.model'
import { Period } from '../models/period.model'
import { Task } from '../models/task.model'
import { TimesheetsLine } from '../models/timesheets-line.model'
import { UsersListItem } from '../../users/models/users-list-item.model'
import { SelectModel } from '../models/select-period.model'
import * as timesheetsActions from '../actions/timesheets';

export interface State {
  timesheet: Timesheets;
  periods: Period[];
  selectModel: SelectModel;
  isLoaded: boolean;
  loading: boolean;
  tasks: Task[];
  users: UsersListItem[];
}

export const initialState: State = {
  timesheet: null,
  isLoaded: false,
  loading: false,
  periods: [],
  selectModel: { periodId: null, userId: null },
  tasks: [],
  users: []
};

export function reducer(
  state = initialState,
  action: timesheetsActions.Actions
): State {
  switch (action.type) {
    case timesheetsActions.GET:
      {
        const selectModel = action.payload as SelectModel;
        return {
          timesheet: state.timesheet,
          isLoaded: true,
          loading: true,
          periods: state.periods,
          selectModel: selectModel,
          tasks: state.tasks,
          users: state.users
        };
      }

    case timesheetsActions.GET_COMPLETE: {
      const timesheet = action.payload as Timesheets;
      return {
        timesheet: timesheet,
        isLoaded: true,
        loading: false,
        periods: state.periods,
        selectModel: state.selectModel,
        tasks: state.tasks,
        users: state.users
      };
    }

    case timesheetsActions.GET_PERIODS:
      {
        return {
          timesheet: state.timesheet,
          isLoaded: true,
          loading: false,
          periods: state.periods,
          selectModel: state.selectModel,
          tasks: state.tasks,
          users: state.users
        };
      }

    case timesheetsActions.GET_PERIODS_COMPLETE: {
      const periods = action.payload as Period[];
      return {
        timesheet: state.timesheet,
        isLoaded: true,
        loading: false,
        periods: periods,
        selectModel: state.selectModel,
        tasks: state.tasks,
        users: state.users
      };
    }
    case timesheetsActions.GET_Tasks:
      {
        return {
          timesheet: state.timesheet,
          isLoaded: true,
          loading: false,
          periods: state.periods,
          selectModel: state.selectModel,
          tasks: state.tasks,
          users: state.users
        };
      }

    case timesheetsActions.GET_Tasks_COMPLETE: {
      const tasks = action.payload as Task[];
      return {
        timesheet: state.timesheet,
        isLoaded: true,
        loading: false,
        periods: state.periods,
        selectModel: state.selectModel,
        tasks: tasks,
        users: state.users
      };
    }

    case timesheetsActions.GET_USERS_COMPLETE: {
      const users = action.payload as UsersListItem[];
      return {
        timesheet: state.timesheet,
        isLoaded: true,
        loading: false,
        periods: state.periods,
        selectModel: state.selectModel,
        tasks: state.tasks,
        users: users
      };
    }

    case timesheetsActions.ADD: {
      const line = action.payload as TimesheetsLine;
      let lines = state.timesheet.Lines;
      let startDate: Date = new Date(line.EndTime);
      let endDate: Date = new Date(line.EndTime);
      endDate.setHours(endDate.getHours() + 1);
      const newLine: TimesheetsLine = {
        Date: line.Date,
        EndTime: endDate,
        Id: 0,
        StartTime: startDate,
        Task: "",
        TaskId: 1,
        ValidationError: null
      }
      lines.push(newLine);
      lines = lines.sort((obj1, obj2) => {
        if (obj1.StartTime > obj2.StartTime) {
          return 1;
        }

        if (obj1.StartTime < obj2.StartTime) {
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
        selectModel: state.selectModel,
        tasks: state.tasks,
        users: state.users
      };
    }


    case timesheetsActions.DELETE: {
      const line = action.payload as TimesheetsLine;
      let lines = state.timesheet.Lines;
      let index = lines.indexOf(line, 0);
      if (index > -1) {
        lines.splice(index, 1);
      }
      const timesheet = state.timesheet;
      timesheet.Lines = lines;
      return {
        timesheet: timesheet,
        isLoaded: true,
        loading: false,
        periods: state.periods,
        selectModel: state.selectModel,
        tasks: state.tasks,
        users: state.users
      };
    }
    //
    case timesheetsActions.APPROVE: {
      const timesheet = state.timesheet;
      timesheet.ApprovalStatus = "Approved";
      return {
        timesheet: timesheet,
        isLoaded: true,
        loading: false,
        periods: state.periods,
        selectModel: state.selectModel,
        tasks: state.tasks,
        users: state.users
      };
    }

    case timesheetsActions.SUBMIT: {
      const timesheet = state.timesheet;
      timesheet.ApprovalStatus = "Waiting for Approval";
      timesheet.LockStatus = "Locked";
      timesheet.Lock = true;
      return {
        timesheet: timesheet,
        isLoaded: true,
        loading: false,
        periods: state.periods,
        selectModel: state.selectModel,
        tasks: state.tasks,
        users: state.users
      };
    }

    case timesheetsActions.RESUBMIT: {
      const timesheet = state.timesheet;
      timesheet.ApprovalStatus = "Requesting Resubmit";
      timesheet.LockStatus = "Unlocked";
      timesheet.Lock = false;
      return {
        timesheet: timesheet,
        isLoaded: true,
        loading: false,
        periods: state.periods,
        selectModel: state.selectModel,
        tasks: state.tasks,
        users: state.users
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
export const getUsers = (state: State) => state.users;
export const getSelectModel = (state: State) => state.selectModel;



