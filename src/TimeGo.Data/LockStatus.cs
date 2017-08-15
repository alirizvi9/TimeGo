using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace TimeGo.Data
{
    [Table("LockStatus")]
    public class LockStatus
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public LockStatus()
        {
            Timesheet = new HashSet<Timesheet>();
            TimesheetLine = new HashSet<TimesheetLine>();
        }

        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int LockStatusId { get; set; }

        [StringLength(100)]
        public string LockStatusType { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Timesheet> Timesheet { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<TimesheetLine> TimesheetLine { get; set; }
    }
}
