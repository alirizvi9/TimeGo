using System;
using TimeGo.ApplicationDomain.Domain;

namespace TimeGo.ApplicationDomain.Entities
{
    public class TimeoffRequest : Entity<TimeoffRequest, long>, IAuditable
    {
        public DateTime FromDate { get; set; }
        public DateTime ToDate { get; set; }
        public string Reason { get; set; }
        public long ApprovalStatusId { get; set; }
        public DateTime? SubmittedOn { get; set; }
        public long? ApprovedById { get; set; }
        public DateTime? ApprovedOn { get; set; }
        public DateTime ReturningToWork { get; set; }
        public string CreatedBy { get; set; }
        public string ModifiedBy { get; set; }
        public DateTime? ModifiedOn { get; set; }
        public long? CompanyId { get; set; }
        public long? EmployeeId { get; set; }
        public virtual ApprovalStatus ApprovalStatus { get; set; }
        public virtual Company Company { get; set; }
        public virtual Employee Employee { get; set; }
        public virtual Employee ApprovedBy { get; set; }
    }
}
