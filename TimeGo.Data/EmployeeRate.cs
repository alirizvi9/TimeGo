using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace TimeGo.Data
{
    [Table("EmployeeRate")]
    public class EmployeeRate
    {
        [Key]
        public int RateId { get; set; }

        public int? CompanyId { get; set; }

        public int? EmployeeId { get; set; }

        public DateTime EffectiveStartDate { get; set; }

        public DateTime? EffectiveEndDate { get; set; }

        public float RateAmount { get; set; }

        public int? UpdatedById { get; set; }

        public DateTime? UpdatedOn { get; set; }

        public virtual Employee Employee { get; set; }
    }
}
