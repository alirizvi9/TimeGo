import { Timesheets } from '../models/timesheets.model'

export interface AddModel {
    Timesheets: Timesheets;
    Period: number;
    User: number;
}