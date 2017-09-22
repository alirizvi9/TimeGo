import { RatesListItem } from '../models/rates-list-item.model'

export interface RatesList {
    Results: RatesListItem[];
    Count: number;
    Page: number;
}