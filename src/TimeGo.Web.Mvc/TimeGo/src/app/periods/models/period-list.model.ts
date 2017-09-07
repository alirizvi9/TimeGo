import { PeriodListItem } from '../models/period-list-item.model'

export interface PeriodList {
    Results: PeriodListItem[];
    Count: number;
    Page: number;
}