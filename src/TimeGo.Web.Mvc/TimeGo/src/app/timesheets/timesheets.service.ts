import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Timesheets } from './models/timesheets.model'
import { TimesheetsLine } from './models/timesheets-line.model'
import { Period } from './models/period.model'
import { Task } from './models/task.model'
import { UsersListItem } from '../users/models/users-list-item.model'
import { RequestService } from '../services/RequestService'
import { SelectModel } from './models/select-period.model'

@Injectable()
export class TimesheetsService {

    constructor(private requestService: RequestService) { }

    getTimesheet(model: SelectModel): Observable<Timesheets> {
        return this.requestService.post<Timesheets>("/api/GetTimesheets/", model);
    }

    getPeriods(): Observable<Period[]> {
        return this.requestService.get<Period[]>("/api/periods/");
    }

    getTasks(): Observable<Task[]> {
        return this.requestService.get<Task[]>("/api/tasks/");
    }

    editTimesheet(timesheets: Timesheets): Observable<any> {
        return this.requestService.post<any[]>("/api/Timesheets/", timesheets);
    }

    getUsers(): Observable<UsersListItem[]> {
        return this.requestService.get<UsersListItem[]>("/api/GetUsers/");
    }

    approve(id: number): Observable<any> {
        return this.requestService.get<any[]>("/api/ApproveTimesheets?id=" + id);
    }

    submit(id: number): Observable<any> {
        return this.requestService.get<any[]>("/api/SubmitTimesheets?id=" + id);
    }

    resubmit(id: number): Observable<any> {
      return this.requestService.get<any[]>("/api/ReSubmitTimesheets?id=" + id);
    }

    unlock(id: number): Observable<any> {
        return this.requestService.get<any[]>("/api/UnlockTimesheets?id=" + id);
    }
}
