using System.Collections.Generic;
using TimeGo.ApplicationDomain.Domain;

namespace TimeGo.ApplicationDomain.Entities
{
    public class LockStatus : Entity<LockStatus, long>
    {
        public LockStatus()
        {
            Timesheet = new HashSet<Timesheet>();
            TimesheetLine = new HashSet<TimesheetLine>();
        }

        public string LockStatusType { get; set; }
        public virtual ICollection<Timesheet> Timesheet { get; set; }
        public virtual ICollection<TimesheetLine> TimesheetLine { get; set; }
    }
}
