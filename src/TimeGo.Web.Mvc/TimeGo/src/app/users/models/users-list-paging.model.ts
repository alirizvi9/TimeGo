export interface UsersListPagingModel {
    orderBy: string;
    page: number;
    pageSize: number;
    IsAscending: boolean;
    count: number;
    IsOrder: boolean;
}