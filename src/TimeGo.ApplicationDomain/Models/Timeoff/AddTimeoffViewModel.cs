using System;

namespace TimeGo.ApplicationDomain.Models.Timeoff
{
    public class AddTimeoffViewModel
    {
        public DateTime? StartDate { get; set; }
        public DateTime? EndDate { get; set; }
        public DateTime? ReturningToWork { get; set; }
        public string Reasone { get; set; }
    }
}
