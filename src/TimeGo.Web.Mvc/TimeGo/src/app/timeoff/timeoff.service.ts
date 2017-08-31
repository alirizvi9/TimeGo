import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { TimeoffListPagingModel } from './models/timeoff-list-paging.model'
import { TimeoffList } from './models/timeoff-list.model'
import { AddTimeoff } from './models/add-timeoff.model'
import { ChangeStatus } from './models/chagne-status-timeoff.model'
import { RequestService } from '../services/RequestService'

@Injectable()
export class TimeoffService {
    constructor(private requestService: RequestService) { }

    getTimeoffList(pagingModel: TimeoffListPagingModel): Observable<TimeoffList> {
        return this.requestService.post<TimeoffList>("/api/Timeoff/", pagingModel);
    }

    addTimeoff(addModel: AddTimeoff): Observable<any> {
        return this.requestService.post<any>("/api/AddTimeoff/", addModel);
    }

    changeStatus(changeStatus: ChangeStatus): Observable<any> {
        return this.requestService.post<any>("/api/ChangeTimeoffStatus/", changeStatus);
    }
}