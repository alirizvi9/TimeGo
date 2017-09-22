import { TasksListPagingModel } from '../models/tasks-list-paging.model'

export interface DeleteTaskModel {
    paging: TasksListPagingModel;
    id: number;
}