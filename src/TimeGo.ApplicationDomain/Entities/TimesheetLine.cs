using System;
using TimeGo.ApplicationDomain.Domain;

namespace TimeGo.ApplicationDomain.Entities
{
    public class TimesheetLine : Entity<TimesheetLine, long>
    {
        public long? TimesheetId { get; set; }
        public DateTime StartTime { get; set; }
        public DateTime EndTime { get; set; }
        public long? TaskId { get; set; }
        public long ApprovalStatusId { get; set; }
        public long LockStatusId { get; set; }
        public long? RevisedById { get; set; }
        public long? ApprovedById { get; set; }
        public DateTime? ApprovedOn { get; set; }
        public virtual ApprovalStatus ApprovalStatus { get; set; }
        public virtual Employee RevisedBy { get; set; }
        public virtual Employee ApprovedBy { get; set; }
        public virtual LockStatus LockStatus { get; set; }
        public virtual Timesheet Timesheet { get; set; }
        public virtual Task Task { get; set; }
    }
}
