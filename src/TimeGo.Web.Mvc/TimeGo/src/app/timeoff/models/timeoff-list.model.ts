import { TimeoffListItem } from '../models/timeoff-list-item.model'

export interface TimeoffList {
    Results: TimeoffListItem[];
    Count: number;
    Page: number;
}