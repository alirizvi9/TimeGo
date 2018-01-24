import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/skip';
import 'rxjs/add/operator/takeUntil';
import { Injectable, InjectionToken, Optional, Inject } from '@angular/core';
import { Effect, Actions, toPayload } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { async } from 'rxjs/scheduler/async';
import { empty } from 'rxjs/observable/empty';
import { of } from 'rxjs/observable/of';

import { TasksService } from '../tasks.service';
import * as tasksActions from '../actions/tasks';
import { TasksList } from '../models/tasks-list.model'
import { TasksListPagingModel } from '../models/tasks-list-paging.model'
import { TasksListItem } from '../models/tasks-list-item.model'
import { AddTask } from '../models/add-task.model';
import { DeleteTaskModel } from '../models/delete.model'
import { ToasterModule, ToasterService, ToasterConfig } from 'angular2-toaster/angular2-toaster';

@Injectable()
export class TasksEffects {

    pagingModel: TasksListPagingModel;

    @Effect()
    get$: Observable<Action> = this.actions$
        .ofType(tasksActions.GET)
        .map(toPayload)
        .switchMap((query: TasksListPagingModel) => {
            const nextGet$ = this.actions$.ofType(tasksActions.GET).skip(1);
            this.pagingModel = query;
            return this.tasksService
                .getTasks(query)
                .takeUntil(nextGet$)
                .map((tasks: TasksList) => new tasksActions.GetCompleteAction(tasks))
                .catch(() => of(new tasksActions.GetCompleteAction(null)));
        });

    @Effect()
    save$: Observable<Action> = this.actions$
        .ofType(tasksActions.ADD)
        .map(toPayload)
        .switchMap((query: AddTask) => {
            const nextGet$ = this.actions$.ofType(tasksActions.ADD).skip(1);
            return this.tasksService
                .addTask(query)
                .takeUntil(nextGet$)
                .map((result: any) => {
                    this.toasterService.pop('success', 'Success', 'Success Add Task');
                    return new tasksActions.SaveCompleteAction(result);
                })
                .catch(() => of(new tasksActions.SaveCompleteAction(null)));
        });

    @Effect()
    edit$: Observable<Action> = this.actions$
        .ofType(tasksActions.EDIT)
        .map(toPayload)
        .switchMap((query: TasksListItem) => {
            const nextGet$ = this.actions$.ofType(tasksActions.EDIT).skip(1);
            return this.tasksService
                .editTask(query)
                .takeUntil(nextGet$)
                .map((result: any) => {
                    this.toasterService.pop('success', 'Success', 'Success Save Task');
                    return new tasksActions.EditCompleteAction(result);
                })
                .catch(() => of(new tasksActions.EditCompleteAction(null)));
        });

    @Effect()
    allow$: Observable<Action> = this.actions$
        .ofType(tasksActions.ALLOW)
        .map(toPayload)
        .switchMap((query: TasksListItem) => {
            const nextGet$ = this.actions$.ofType(tasksActions.ALLOW).skip(1);
            return this.tasksService
                .allowTask(query)
                .takeUntil(nextGet$)
                .map((result: any) => {
                    this.toasterService.pop('success', 'Success', 'Success Allow Task');
                    return new tasksActions.AllowCompleteAction(result);
                })
                .catch(() => of(new tasksActions.AllowCompleteAction(null)));
        });

    @Effect()
    delete$: Observable<Action> = this.actions$
        .ofType(tasksActions.DELETE)
        .map(toPayload)
        .switchMap((model: DeleteTaskModel) => {
            const nextGet$ = this.actions$.ofType(tasksActions.GET);
            return this.tasksService
                .delete(model.id)
                .takeUntil(nextGet$)
                .map((result: any) => {
                    this.toasterService.pop('success', 'Success', 'Success Delete Task');
                    return new tasksActions.GetAction(model.paging);
                })
                .catch(() => of(new tasksActions.SaveCompleteAction(null)));
        });

    @Effect()
    update$: Observable<Action> = this.actions$
        .ofType(tasksActions.ADD_COMPLETE, tasksActions.ALLOW_COMPLETE, tasksActions.EDIT_COMPLETE)
        .map(toPayload)
        .switchMap((model: any) => {
            const nextGet$ = this.actions$.ofType(tasksActions.GET_COMPLETE);
            return this.tasksService
                .getTasks(this.pagingModel)
                .takeUntil(nextGet$)
                .map((tasks: TasksList) => new tasksActions.GetCompleteAction(tasks))
                .catch(() => of(new tasksActions.GetCompleteAction(null)));
        });

    constructor(
        private actions$: Actions,
        private tasksService: TasksService,
        private toasterService: ToasterService 
    ) { }
}