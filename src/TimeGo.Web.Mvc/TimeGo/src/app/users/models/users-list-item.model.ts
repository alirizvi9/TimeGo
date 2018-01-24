export interface UsersListItem {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    last4Ss: string;
    isAdmin: boolean;
    isActive: boolean;
    isOvertimeCalculated: boolean;
    IsRegistrate: boolean;
    InviteOn: Date;
}