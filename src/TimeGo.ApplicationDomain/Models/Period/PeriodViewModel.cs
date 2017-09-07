using System;

namespace TimeGo.ApplicationDomain.Models.Period
{
    public class PeriodViewModel
    {
        public long Id { get; set; }
        public DateTime? PeriodStart { get; set; }
        public DateTime? PeriodEnd { get; set; }
        public DateTime? Reminder1 { get; set; }
        public DateTime? Reminder2 { get; set; }
        public string Status { get; set; }
    }
}
