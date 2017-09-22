using System;

namespace TimeGo.ApplicationDomain.Models.Rates
{
    public class AddRateViewModel
    {
        public long UserId { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime? EndDate { get; set; }
        public decimal Rate { get; set; }
    }
}
