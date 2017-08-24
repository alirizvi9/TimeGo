using System;

namespace TimeGo.ApplicationDomain.Models.Timesheets
{
    public class TimesheetLineViewModel
    {
        public long Id { get; set; }
        public DateTime StartTime { get; set; }
        public DateTime EndTime { get; set; }
        public DateTime Date { get; set; }
        public long TaskId { get; set; }
        public string Task { get; set; }
    }
}
