import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { RatesListPagingModel } from './models/rates-list-paging.model'
import { RatesList } from './models/rates-list.model'
import { AddRate } from './models/add-rates.model'
import { RequestService } from '../services/RequestService'
import { UsersListItem } from '../users/models/users-list-item.model'

@Injectable()
export class RatesService {
    constructor(private requestService: RequestService) { }

    getRates(pagingModel: RatesListPagingModel): Observable<RatesList> {
        return this.requestService.post<RatesList>("/api/ratesPage/", pagingModel);
    }

    getUsers(): Observable<UsersListItem[]> {
        return this.requestService.get<UsersListItem[]>("/api/GetUsers/");
    }

    addRate(addModel: AddRate): Observable<any> {
        return this.requestService.post<any>("/api/AddRate/", addModel);
    }

    delete(id: number): Observable<any> {
        return this.requestService.get<any>("/api/deleteRate?id="+id);
    }
}