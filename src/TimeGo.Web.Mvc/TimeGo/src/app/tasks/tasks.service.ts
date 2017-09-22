import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { TasksListPagingModel } from './models/tasks-list-paging.model'
import { TasksList } from './models/tasks-list.model'
import { AddTask } from './models/add-task.model'
import { TasksListItem } from './models/tasks-list-item.model'
import { RequestService } from '../services/RequestService'

@Injectable()
export class TasksService {
    constructor(private requestService: RequestService) { }

    getTasks(pagingModel: TasksListPagingModel): Observable<TasksList> {
        return this.requestService.post<TasksList>("/api/tasksPage/", pagingModel);
    }

    addTask(addModel: AddTask): Observable<any> {
        return this.requestService.post<any>("/api/AddTask/", addModel);
    }

    allowTask(allowModel: TasksListItem): Observable<any> {
        return this.requestService.post<any>("/api/AllowTask/", allowModel);
    }

    delete(id: number): Observable<any> {
        return this.requestService.get<any>("/api/deleteTask?id="+id);
    }
}