import { TimesheetsLine } from '../models/timesheets-line.model'

export interface Timesheets {
    Lines: TimesheetsLine[];
    EmployeeNotes: string;
    ApproverNotes: string;
    ApprovalStatus: string;
    LockStatus: string;
    SubmittedOn: Date;
    ApprovedOn: Date;
    RevisedOn: Date;
    ApprovedBy: string;
    RevisedBy: string;
    Lock: boolean;
    Id: number;
}
