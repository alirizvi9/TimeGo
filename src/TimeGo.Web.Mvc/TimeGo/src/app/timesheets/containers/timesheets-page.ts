import 'rxjs/add/operator/take';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as fromTimesheets from '../reducers';
import * as timesheetsActions from '../actions/timesheets';

import { ToasterModule, ToasterService, ToasterConfig } from 'angular2-toaster/angular2-toaster';

import { UsersListItem } from '../../users/models/users-list-item.model'
import { Timesheets } from '../models/timesheets.model'
import { SelectModel } from '../models/select-period.model'
import { Period } from '../models/period.model'
import { Task } from '../models/task.model'
import { TimesheetsLine } from '../models/timesheets-line.model'
import { AddModel } from '../models/add.model';
import { AccountService } from '../../services/AccountService'

@Component({
  selector: 'timesheets-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <up-timesheets [timesheets]="timesheets$ | async" [isLoaded]="isLoaded$ | async" [selectModel]="selectModel$ | async" [periods]="periods$ | async" 
    [users]="users$ | async" [tasks]="tasks$ | async" [loading]="loading$ | async" 
    (selectPeriod)="selectPeriod($event)" (addLine)="addLine($event)" 
    (save)="save($event)" (delete)="delete($event)" (submite)="submite($event)" (resubmite)="resubmite($event)" (approve)="approve($event)" (unlock)="unlock($event)"></up-timesheets>
  `,
})
export class TimesheetsPageComponent {
  timesheets$: Observable<Timesheets>;
  isLoaded$: Observable<boolean>;
  loading$: Observable<boolean>;
  periods$: Observable<Period[]>;
  tasks$: Observable<Task[]>;
  users$: Observable<UsersListItem[]>;
  selectModel$: Observable<SelectModel>;
  role: string;

  constructor(private store: Store<fromTimesheets.State>,
    private toasterService: ToasterService, account: AccountService) {
    this.timesheets$ = store.select(fromTimesheets.getTimesheet);
    this.isLoaded$ = store.select(fromTimesheets.getIsLoadedStatus);
    this.loading$ = store.select(fromTimesheets.getLoadingStatus);
    this.periods$ = store.select(fromTimesheets.getPeriods);
    this.tasks$ = store.select(fromTimesheets.getTasks);
    this.users$ = store.select(fromTimesheets.getUsers);
    this.selectModel$ = store.select(fromTimesheets.getSelectModel);
    this.role = account.role;
  }

  ngOnInit() {
    this.store.dispatch(new timesheetsActions.GetPeriodAction(0));
    this.store.dispatch(new timesheetsActions.GetTasksAction(0));
    this.store.dispatch(new timesheetsActions.GetUsersAction(0));
  }

  selectPeriod(model: SelectModel) {
    if (this.role == 'Task Manager') {
      if (model.periodId && model.userId)
        this.store.dispatch(new timesheetsActions.GetAction(model));
    }
    else {
      if (model.periodId)
        this.store.dispatch(new timesheetsActions.GetAction(model));
    }
  }

  addLine(line: TimesheetsLine) {
    this.store.dispatch(new timesheetsActions.AddAction(line));
  }

  save(model: AddModel) {
    for (let line of model.Timesheets.Lines) {
      if (line.ValidationError != null) {
        this.toasterService.pop('error', 'Error Save', 'Timesheet line has not valid time');
        return;
      }
    }
    this.store.dispatch(new timesheetsActions.EditAction(model));
  }

  delete(model: TimesheetsLine) {
    this.store.dispatch(new timesheetsActions.DeleteAction(model));
  }

  submite(id: number) {
    this.store.dispatch(new timesheetsActions.SubmitAction(id));
  }

  resubmite(id: number) {
    this.store.dispatch(new timesheetsActions.ReSubmitAction(id));
  }

  unlock(id: number) {
    this.store.dispatch(new timesheetsActions.ToUnlockAction(id));
  }

  approve(id: number) {
    this.store.dispatch(new timesheetsActions.ApproveAction(id));
  }
}
