import { UsersListItem } from '../models/users-list-item.model'

export interface UsersList {
    Results: UsersListItem[];
    Count: number;
    Page: number;
}