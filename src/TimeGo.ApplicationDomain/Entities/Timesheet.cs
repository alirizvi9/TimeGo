using System;
using System.Collections.Generic;
using TimeGo.ApplicationDomain.Domain;

namespace TimeGo.ApplicationDomain.Entities
{
    public class Timesheet : Entity<Timesheet, long>
    {
        public Timesheet()
        {
            TimesheetLines = new HashSet<TimesheetLine>();
        }

        public long? CompanyId { get; set; }
        public long? PeriodId { get; set; }
        public long? EmployeeId { get; set; }
        public string EmployeeNotes { get; set; }
        public string ApproverNotes { get; set; }
        public long ApprovalStatusId { get; set; }
        public long LockStatusId { get; set; }
        public long? RevisedById { get; set; }
        public long? ApprovedById { get; set; }
        public DateTime? SavedOn { get; set; }
        public DateTime? SubmittedOn { get; set; }
        public DateTime? RevisedOn { get; set; }
        public DateTime? ApprovedOn { get; set; }
        public virtual ApprovalStatus ApprovalStatus { get; set; }
        public virtual Company Company { get; set; }
        public virtual Employee Employee { get; set; }
        public virtual Employee RevisedBy { get; set; }
        public virtual Employee ApprovedBy { get; set; }
        public virtual LockStatus LockStatus { get; set; }
        public virtual Period Period { get; set; }
        public virtual ICollection<TimesheetLine> TimesheetLines { get; set; }
    }
}
