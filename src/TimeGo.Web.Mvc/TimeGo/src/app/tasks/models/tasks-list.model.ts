import { TasksListItem } from '../models/tasks-list-item.model'

export interface TasksList {
    Results: TasksListItem[];
    Count: number;
    Page: number;
}