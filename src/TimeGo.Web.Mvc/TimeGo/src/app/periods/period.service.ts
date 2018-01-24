import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { PeriodListItem } from './models/period-list-item.model'
import { PeriodListPagingModel } from './models/period-list-paging.model'
import { PeriodList } from './models/period-list.model'
import { AddPeriod } from './models/add-period.model'
import { ChangeStatus } from './models/chagne-status-period.model'
import { RequestService } from '../services/RequestService'

@Injectable()
export class PeriodService {
    constructor(private requestService: RequestService) { }

    getPeriodList(pagingModel: PeriodListPagingModel): Observable<PeriodList> {
        return this.requestService.post<PeriodList>("/api/periodPage/", pagingModel);
    }

    addPeriod(addModel: AddPeriod): Observable<any> {
        return this.requestService.post<any>("/api/AddPeriod/", addModel);
    }

    changeStatus(changeStatus: ChangeStatus): Observable<any> {
        return this.requestService.post<any>("/api/ChangePeriodStatus/", changeStatus);
    }

    delete(id: number): Observable<any> {
        return this.requestService.get<any>("/api/deleteperiod?id="+id);
    }

    edit(model: PeriodListItem): Observable<any> {
        return this.requestService.post<any>("/api/EditPeriod/", model);
    }
}