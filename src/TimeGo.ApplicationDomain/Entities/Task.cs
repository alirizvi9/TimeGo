using System;
using System.Collections.Generic;
using TimeGo.ApplicationDomain.Domain;

namespace TimeGo.ApplicationDomain.Entities
{
    public class Task : Entity<Task, long>, IAuditable
    {
        public Task()
        {
            TaskAllowed = new HashSet<TaskAllowed>();
        }

        public string TaskName { get; set; }
        public bool IsActive { get; set; }
        public long? ApproverPrimaryId { get; set; }
        public long? ApproverSecondaryId { get; set; }
        public long? CompanyId { get; set; }
        public string CreatedBy { get; set; }
        public string ModifiedBy { get; set; }
        public DateTime? ModifiedOn { get; set; }
        public virtual Company Company { get; set; }
        public virtual Employee ApproverPrimary { get; set; }
        public virtual Employee ApproverSecondary { get; set; }
        public virtual ICollection<TaskAllowed> TaskAllowed { get; set; }
    }
}
