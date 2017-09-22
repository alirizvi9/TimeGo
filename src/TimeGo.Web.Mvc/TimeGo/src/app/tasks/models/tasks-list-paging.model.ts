export interface TasksListPagingModel {
    orderBy: string;
    page: number;
    pageSize: number;
    IsAscending: boolean;
    count: number;
    IsOrder: boolean;
}