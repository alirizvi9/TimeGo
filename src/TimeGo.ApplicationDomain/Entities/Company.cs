using System;
using System.Collections.Generic;
using TimeGo.ApplicationDomain.Domain;
using TimeGo.ApplicationDomain.Enums;

namespace TimeGo.ApplicationDomain.Entities
{
    public class Company : Entity<Company, long>, IAuditable
    {
        public Company()
        {
            Employee = new HashSet<Employee>();
            Period = new HashSet<Period>();
            Task = new HashSet<Task>();
            TimeoffRequests = new HashSet<TimeoffRequest>();
            Timesheet = new HashSet<Timesheet>();
        }

        public string CompanyName { get; set; }
        public string ContactName { get; set; }
        public string PhoneNumber { get; set; }
        public string EmailAddress { get; set; }
        public string TimeGoUrl { get; set; }
        public string BillingAddressLine1 { get; set; }
        public string BillingAddressLine2 { get; set; }
        public string BillingAddressCity { get; set; }
        public string BillingAddressState { get; set; }
        public string BillingAddressZip { get; set; }
        public string BillingAddressCountry { get; set; }
        public long CompanyApprovedId { get; set; }
        public long SubscriptionPlanId { get; set; }
        public string VacationApproverEmail { get; set; }
        public Weekdays? WorkweekStaryDay { get; set; }
        public long? TimezoneId { get; set; }
        public string RegistrationCode { get; set; }
        public long? TimePeriodsInFuture { get; set; }
        public string CreatedBy { get; set; }
        public string ModifiedBy { get; set; }
        public DateTime? ModifiedOn { get; set; }
        public virtual Timezone Timezone { get; set; }
        public virtual CompanyApproved CompanyApproved { get; set; }
        public virtual SubscriptionPlan SubscriptionPlan { get; set; }
        public virtual ICollection<Employee> Employee { get; set; }
        public virtual ICollection<Period> Period { get; set; }
        public virtual ICollection<Task> Task { get; set; }
        public virtual ICollection<TimeoffRequest> TimeoffRequests { get; set; }
        public virtual ICollection<Timesheet> Timesheet { get; set; }
    }
}
