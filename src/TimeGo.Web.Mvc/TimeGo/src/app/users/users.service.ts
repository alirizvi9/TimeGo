import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { UsersListPagingModel } from './models/users-list-paging.model'
import { UsersListItem } from './models/users-list-item.model'
import { RequestService } from '../services/RequestService'

@Injectable()
export class UsersService {
    constructor(private requestService: RequestService) { }

    getUsersList(pagingModel: UsersListPagingModel): Observable<UsersListItem[]> {
        return this.requestService.post<UsersListItem[]>("/api/GetUsers/", pagingModel);
    }
}