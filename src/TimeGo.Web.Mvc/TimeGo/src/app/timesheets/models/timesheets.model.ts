import { TimesheetsLine } from '../models/timesheets-line.model'

export interface Timesheets {
    Lines: TimesheetsLine[];
    EmployeeNotes: string;
    ApproverNotes: string;
    ApprovalStatus: string;
    SubmittedOn: Date;
    ApprovedOn: Date;
    Id: number;
}