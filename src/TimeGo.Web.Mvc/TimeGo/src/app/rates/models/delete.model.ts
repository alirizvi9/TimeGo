import { RatesListPagingModel } from '../models/rates-list-paging.model'

export interface DeleteRateModel {
    paging: RatesListPagingModel;
    id: number;
}