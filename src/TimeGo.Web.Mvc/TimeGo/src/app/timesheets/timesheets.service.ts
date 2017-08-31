import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Timesheets } from './models/timesheets.model'
import { TimesheetsLine } from './models/timesheets-line.model'
import { Period } from './models/period.model'
import { Task } from './models/task.model'
import { RequestService } from '../services/RequestService'

@Injectable()
export class TimesheetsService {

    constructor(private requestService: RequestService) { }

    getTimesheet(idPeriod: number): Observable<Timesheets> {
        return this.requestService.get<Timesheets>("/api/Timesheets?periodId=" + idPeriod);
    }

    getPeriods(): Observable<Period[]> {
        return this.requestService.get<Period[]>("/api/periods/");
    }

    getTasks(): Observable<Task[]> {
        return this.requestService.get<Task[]>("/api/tasks/");
    }

    editTimesheet(timesheets: Timesheets): Observable<any> {
        return this.requestService.post<any[]>("/api/tasks/", timesheets);
    }
}