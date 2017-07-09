using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace TimeGo.Data
{
    [Table("TimesheetLine")]
    public class TimesheetLine
    {
        [Key]
        public int LineId { get; set; }

        public int? TimesheetId { get; set; }

        public DateTime StartTime { get; set; }

        public DateTime EndTime { get; set; }

        public int? TaskId { get; set; }

        public int ApprovalStatusId { get; set; }

        public int LockStatusId { get; set; }

        public int? RevisedById { get; set; }

        public int? ApprovedById { get; set; }

        public DateTime? ApprovedOn { get; set; }

        public virtual ApprovalStatus ApprovalStatus { get; set; }

        public virtual Employee Employee { get; set; }

        public virtual Employee Employee1 { get; set; }

        public virtual LockStatus LockStatus { get; set; }

        public virtual Timesheet Timesheet { get; set; }
    }
}
