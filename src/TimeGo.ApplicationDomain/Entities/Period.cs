using System;
using System.Collections.Generic;
using TimeGo.ApplicationDomain.Domain;

namespace TimeGo.ApplicationDomain.Entities
{
    public class Period : Entity<Period, long>
    {
        public Period()
        {
            Timesheet = new HashSet<Timesheet>();
        }

        public long CompanyId { get; set; }
        public long EmployeeId { get; set; }
        public DateTime? PeriodStart { get; set; }
        public DateTime? PeriodEnd { get; set; }
        public DateTime? Reminder1Date { get; set; }
        public DateTime? Reminder2Date { get; set; }
        public int PeriodStatusId { get; set; }
        public virtual Company Company { get; set; }
        public virtual Employee Employee { get; set; }
        public virtual ICollection<Timesheet> Timesheet { get; set; }
    }
}
