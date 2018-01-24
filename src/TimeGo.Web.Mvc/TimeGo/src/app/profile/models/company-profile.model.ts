export interface CompanyProfile {
    id: number;
    companyName: string;
    contactName: string;
    phoneNumber: string;
    emailAddress: string;
    vacationApproverEmail: string;
    workWeekStartDay?: number;
    timesheetsWeeks?: number;
    timeGoUrl: string;
    firstName: string;
    lastName: string;
}