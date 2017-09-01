import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { UsersListPagingModel } from './models/users-list-paging.model'
import { UsersListItem } from './models/users-list-item.model'
import { UsersList } from './models/user-list.model'
import { RequestService } from '../services/RequestService'

@Injectable()
export class UsersService {
    constructor(private requestService: RequestService) { }

    getUsersList(pagingModel: UsersListPagingModel): Observable<UsersList> {
        return this.requestService.post<UsersList>("/api/GetUsers/", pagingModel);
    }
}