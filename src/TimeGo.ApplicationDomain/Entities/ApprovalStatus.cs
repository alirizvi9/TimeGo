using System.Collections.Generic;
using TimeGo.ApplicationDomain.Domain;

namespace TimeGo.ApplicationDomain.Entities
{
    public class ApprovalStatus : Entity<ApprovalStatus, long>
    {
        public ApprovalStatus()
        {
            TimeoffRequests = new HashSet<TimeoffRequest>();
            Timesheet = new HashSet<Timesheet>();
            TimesheetLine = new HashSet<TimesheetLine>();
        }
        public string ApprovalStatusType { get; set; }
        public virtual ICollection<TimeoffRequest> TimeoffRequests { get; set; }
        public virtual ICollection<Timesheet> Timesheet { get; set; }
        public virtual ICollection<TimesheetLine> TimesheetLine { get; set; }
    }
}
