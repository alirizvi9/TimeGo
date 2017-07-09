using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace TimeGo.Data
{
    public class ApprovalStatus
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public ApprovalStatus()
        {
            TimeoffRequests = new HashSet<TimeoffRequest>();
            Timesheet = new HashSet<Timesheet>();
            TimesheetLine = new HashSet<TimesheetLine>();
        }

        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int ApprovalStatusId { get; set; }

        [StringLength(100)]
        public string ApprovalStatusType { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<TimeoffRequest> TimeoffRequests { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Timesheet> Timesheet { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<TimesheetLine> TimesheetLine { get; set; }
    }
}
