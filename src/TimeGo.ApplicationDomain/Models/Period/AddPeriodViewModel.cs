using System;

namespace TimeGo.ApplicationDomain.Models.Period
{
    public class AddPeriodViewModel
    {
        public DateTime StartDate { get; set; }
        public DateTime? Reminder1 { get; set; }
        public DateTime? Reminder2 { get; set; }
    }
}
