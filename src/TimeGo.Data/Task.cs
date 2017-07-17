using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace TimeGo.Data
{
    [Table("Task")]
    public class Task
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public Task()
        {
            TaskAllowed = new HashSet<TaskAllowed>();
        }

        public int TaskId { get; set; }

        public int? CompanyId { get; set; }

        [StringLength(100)]
        public string TaskName { get; set; }

        [StringLength(100)]
        public string Approver1Email { get; set; }

        [StringLength(100)]
        public string Approver2Email { get; set; }

        public int? IsActive { get; set; }

        public int? UpdatedById { get; set; }

        public DateTime? UpdatedOn { get; set; }

        public int? Approver1Id { get; set; }

        public int? Approver2Id { get; set; }

        public virtual Company Company { get; set; }

        public virtual Employee Employee { get; set; }

        public virtual Employee Employee1 { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<TaskAllowed> TaskAllowed { get; set; }
    }
}
