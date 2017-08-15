using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace TimeGo.Data
{
    [Table("Period")]
    public class Period
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public Period()
        {
            Timesheet = new HashSet<Timesheet>();
        }

        public int PeriodId { get; set; }

        public int? CompanyId { get; set; }

        public DateTime? PeriodStart { get; set; }

        public DateTime? PeriodEnd { get; set; }

        public DateTime? Reminder1Date { get; set; }

        public DateTime? Reminder2Date { get; set; }

        public int PeriodStatusId { get; set; }

        public int? UpdatedById { get; set; }

        public DateTime? UpdatedOn { get; set; }

        public virtual Company Company { get; set; }

        public virtual Employee Employee { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Timesheet> Timesheet { get; set; }
    }
}
