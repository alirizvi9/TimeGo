using System;

namespace TimeGo.ApplicationDomain.Models.Rates
{
    public class RateViewModel
    {
        public long Id { get; set; }
        public long? UserId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime? EndDate { get; set; }
        public decimal Rate { get; set; }
    }
}
