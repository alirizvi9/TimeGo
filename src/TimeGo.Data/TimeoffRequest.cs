using System;
using System.ComponentModel.DataAnnotations;

namespace TimeGo.Data
{
    public class TimeoffRequest
    {
        [Key]
        public int TimeoffId { get; set; }

        public int? CompanyId { get; set; }

        public int? EmployeeId { get; set; }

        public DateTime FromDate { get; set; }

        public DateTime ToDate { get; set; }

        public string Reason { get; set; }

        public int ApprovalStatusId { get; set; }

        public DateTime? SubmittedOn { get; set; }

        public int? ApprovedById { get; set; }

        public DateTime? ApprovedOn { get; set; }

        public DateTime ReturningToWork { get; set; }

        public virtual ApprovalStatus ApprovalStatus { get; set; }

        public virtual Company Company { get; set; }

        public virtual Employee Employee { get; set; }
    }
}
