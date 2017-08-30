import { Injectable } from '@angular/core';
import { URLSearchParams } from '@angular/http';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Timesheets } from './models/timesheets.model'
import { TimesheetsLine } from './models/timesheets-line.model'
import { Period } from './models/period.model'
import { Task } from './models/task.model'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
declare var commonServerData: any;

@Injectable()
export class TimesheetsService {
    headers: Headers = new Headers({
        'Authorization': 'Bearer ' + commonServerData.Token,
        'Content-Type': 'application/json'
    });
    options: RequestOptions = new RequestOptions({ headers: this.headers });

    constructor(private http: Http) { }

    getTimesheet(idPeriod: number): Observable<Timesheets> {
        return this.http.get("/api/Timesheets?periodId=" + idPeriod, this.options).map((response: Response) =>
            response.json())
            .catch(this.handleError);
    }

    getPeriods(): Observable<Period[]> {
        return this.http.get("/api/periods/", this.options).map((response: Response) =>
            response.json())
            .catch(this.handleError);
    }

    getTasks(): Observable<Task[]> {
        return this.http.get("/api/tasks/", this.options).map((response: Response) =>
            response.json())
            .catch(this.handleError);
    }

    editTimesheet(timesheets: Timesheets): Observable<any> {
        return this.http.post("/api/Timesheets/", timesheets, this.options).map((response: Response) =>
            response.json())
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}