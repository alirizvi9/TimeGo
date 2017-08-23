import { Injectable } from '@angular/core';
import { URLSearchParams } from '@angular/http';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { TimeoffListPagingModel } from './models/timeoff-list-paging.model'
import { TimeoffList } from './models/timeoff-list.model'
import { AddTimeoff } from './models/add-timeoff.model'
import { ChangeStatus } from './models/chagne-status-timeoff.model'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
declare var commonServerData: any;

@Injectable()
export class TimeoffService {
    headers: Headers = new Headers({
        'Authorization': 'Bearer ' + commonServerData.Token,
        'Content-Type': 'application/json'
    });
    options: RequestOptions = new RequestOptions({ headers: this.headers });

    constructor(private http: Http) { }

    getTimeoffList(pagingModel: TimeoffListPagingModel): Observable<TimeoffList> {
        return this.http.post("/api/Timeoff/", pagingModel, this.options).map((response: Response) =>
            response.json())
            .catch(this.handleError);
    }

    addTimeoff(addModel: AddTimeoff): Observable<any> {
        return this.http.post("/api/AddTimeoff/", addModel, this.options).map((response: Response) =>
            response.json())
            .catch(this.handleError);
    }

    changeStatus(changeStatus: ChangeStatus): Observable<any> {
        return this.http.post("/api/ChangeTimeoffStatus/", changeStatus, this.options).map((response: Response) =>
            response.json())
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}