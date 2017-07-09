using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace TimeGo.Data
{
    [Table("Timesheet")]
    public class Timesheet
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public Timesheet()
        {
            TimesheetLines = new HashSet<TimesheetLine>();
        }

        public int TimesheetId { get; set; }

        public int? CompanyId { get; set; }

        public int? PeriodId { get; set; }

        public int? EmployeeId { get; set; }

        public string EmployeeNotes { get; set; }

        public string ApproverNotes { get; set; }

        public int ApprovalStatusId { get; set; }

        public int LockStatusId { get; set; }

        public int? RevisedById { get; set; }

        public int? ApprovedById { get; set; }

        public DateTime? SavedOn { get; set; }

        public DateTime? SubmittedOn { get; set; }

        public DateTime? RevisedOn { get; set; }

        public DateTime? ApprovedOn { get; set; }

        public virtual ApprovalStatus ApprovalStatus { get; set; }

        public virtual Company Company { get; set; }

        public virtual Employee Employee { get; set; }

        public virtual Employee Employee1 { get; set; }

        public virtual Employee Employee2 { get; set; }

        public virtual LockStatus LockStatus { get; set; }

        public virtual Period Period { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<TimesheetLine> TimesheetLines { get; set; }
    }
}
