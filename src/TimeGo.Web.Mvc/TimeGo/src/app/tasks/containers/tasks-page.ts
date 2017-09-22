import 'rxjs/add/operator/take';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as fromTasks from '../reducers';
import * as tasksActions from '../actions/tasks';

import { TasksListPagingModel } from '../models/tasks-list-paging.model';
import { TasksListItem } from '../models/tasks-list-item.model';
import { AddTask } from '../models/add-task.model';
import { DeleteTaskModel } from '../models/delete.model'

@Component({
    selector: 'tasks-page',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
    <up-tasks-list [tasks]="tasks$ | async" [isLoaded]="isLoaded$ | async" [pagingModel]="pagingModel$ | async" [loading]="loading$ | async" (order)="orderTasks($event)" (add)="addTask($event)" (delete)="delete($event)" (changePage)="changePage($event)" (allow)="allow($event)"></up-tasks-list>
  `,
})
export class TasksPageComponent {
    tasks$: Observable<TasksListItem[]>;
    isLoaded$: Observable<boolean>;
    loading$: Observable<boolean>;
    pagingModel$: Observable<TasksListPagingModel>;

    constructor(private store: Store<fromTasks.State>) {
        this.tasks$ = store.select(fromTasks.getTasks);
        this.isLoaded$ = store.select(fromTasks.getIsLoadedStatus);
        this.loading$ = store.select(fromTasks.getLoadingStatus);
        this.pagingModel$ = store.select(fromTasks.getPagingModel);
    }

    ngOnInit() {

        let pagingModelView: TasksListPagingModel = {
            orderBy: "id",
            page: 1,
            pageSize: 10,
            IsAscending: true,
            count: 10,
            IsOrder: true
        }
        this.store.dispatch(new tasksActions.GetAction(pagingModelView));
    }

    orderTasks(orderBy: string) {
        let pagingModelView: TasksListPagingModel = {
            orderBy: orderBy,
            page: 1,
            pageSize: 10,
            IsAscending: true,
            count: 10,
            IsOrder: true
        }
        this.store.dispatch(new tasksActions.GetAction(pagingModelView));
    }

    addTask(model: AddTask) {
        this.store.dispatch(new tasksActions.SaveAction(model));
    }

    changePage(model: TasksListPagingModel)
    {
        this.store.dispatch(new tasksActions.GetAction(model));
    }

    delete(model: DeleteTaskModel)
    {
        this.store.dispatch(new tasksActions.DeleteAction(model));
    }

    allow(model: TasksListItem)
    {
        this.store.dispatch(new tasksActions.AllowAction(model));
    }
}