using System;
using TimeGo.ApplicationDomain.Domain;

namespace TimeGo.ApplicationDomain.Entities
{
    public class EmployeeRate : Entity<EmployeeRate, long>, IAuditable
    {
        public DateTime EffectiveStartDate { get; set; }
        public DateTime? EffectiveEndDate { get; set; }
        public decimal RateAmount { get; set; }
        public string CreatedBy { get; set; }
        public string ModifiedBy { get; set; }
        public DateTime? ModifiedOn { get; set; }
        public long? CompanyId { get; set; }
        public long? EmployeeId { get; set; }
        public virtual Company Company { get; set; }
        public virtual Employee Employee { get; set; }
    }
}
