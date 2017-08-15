import { Injectable } from '@angular/core';
import { URLSearchParams } from '@angular/http';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {UsersListPagingModel} from './models/users-list-paging.model'
import {UsersListItem} from './models/users-list-item.model'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
declare var commonServerData: any;

@Injectable()
export class UsersService {
    headers: Headers = new Headers({
        'Authorization': 'Bearer ' + commonServerData.Token,
        'Content-Type': 'application/json'
    });
    options: RequestOptions = new RequestOptions({ headers: this.headers });

    constructor(private http: Http) { }

    getUsersList(pagingModel: UsersListPagingModel): Observable<UsersListItem[]> {
        return this.http.post("/api/GetUsers/", pagingModel, this.options).map((response: Response) =>
            response.json())
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}