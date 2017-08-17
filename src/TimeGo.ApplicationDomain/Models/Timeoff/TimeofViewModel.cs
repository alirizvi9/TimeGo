using System;

namespace TimeGo.ApplicationDomain.Models.Timeoff
{
    public class TimeofViewModel
    {
        public long Id { get; set; }
        public string UserName { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public DateTime ReturningToWork { get; set; }
        public string Reasone { get; set; }
    }
}
