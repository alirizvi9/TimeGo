export interface TasksListItem {
    id: number;
    IsActive: boolean;
    ApproverPrimary: string;
    ApproverSecondary: string;
    TaskName: string;
    Allows: AllowUser[];
}

export interface AllowUser {
    UserId: number;
    FirstName: string;
    LastName: string;
    Allow: boolean;
}