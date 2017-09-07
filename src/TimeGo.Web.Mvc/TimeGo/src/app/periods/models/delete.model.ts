import { PeriodListPagingModel } from '../models/period-list-paging.model'

export interface DeletePeriodModel {
    paging: PeriodListPagingModel;
    id: number;
}