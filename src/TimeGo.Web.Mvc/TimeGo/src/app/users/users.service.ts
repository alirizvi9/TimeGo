import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { UsersListPagingModel } from './models/users-list-paging.model'
import { UsersListItem } from './models/users-list-item.model'
import { UsersList } from './models/user-list.model'
import { RequestService } from '../services/RequestService'
import { AddEmployee } from './models/add-employee.model';
import { InviteEmployee } from './models/invite-employee.model';


@Injectable()
export class UsersService {
    constructor(private requestService: RequestService) { }

    getUsersList(pagingModel: UsersListPagingModel): Observable<UsersList> {
        return this.requestService.post<UsersList>("/api/GetUsers/", pagingModel);
    }

    addEmployee(model: AddEmployee): Observable<any> {
        return this.requestService.post<any>("/api/AddEmployee/", model);
    }

    inviteEmployee(model: InviteEmployee): Observable<any> {
        return this.requestService.post<any>("/api/InviteEmployee",model);
    }

    editEmployee(model: UsersListItem): Observable<any> {
        return this.requestService.post<any>("/api/EditEmployee", model);
    }

    reinviteEmployee(id: number): Observable<any> {
        return this.requestService.get<any>("/api/ReInviteEmployee?id=" + id);
    }
}