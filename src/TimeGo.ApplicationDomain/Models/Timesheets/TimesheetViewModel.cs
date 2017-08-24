using System;
using System.Collections.Generic;

namespace TimeGo.ApplicationDomain.Models.Timesheets
{
    public class TimesheetViewModel
    {
        public string EmployeeNotes { get; set; }
        public string ApproverNotes { get; set; }
        public string ApprovalStatus { get; set; }
        public DateTime? SubmittedOn { get; set; }
        public DateTime? ApprovedOn { get; set; }
        public List<TimesheetLineViewModel> Lines { get; set; }
        public long Id { get; set; }
    }
}
