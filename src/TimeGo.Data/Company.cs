using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace TimeGo.Data
{
    [Table("Company")]
    public class Company
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public Company()
        {
            Employee = new HashSet<Employee>();
            Period = new HashSet<Period>();
            Task = new HashSet<Task>();
            TimeoffRequests = new HashSet<TimeoffRequest>();
            Timesheet = new HashSet<Timesheet>();
        }

        public int CompanyId { get; set; }

        [StringLength(100)]
        public string CompanyName { get; set; }

        [StringLength(100)]
        public string ContactName { get; set; }

        [StringLength(100)]
        public string PhoneNumber { get; set; }

        [StringLength(100)]
        public string EmailAddress { get; set; }

        [StringLength(100)]
        public string TimeGoURL { get; set; }

        public int CompanyApprovedId { get; set; }

        [StringLength(100)]
        public string BillingAddressLine1 { get; set; }

        [StringLength(100)]
        public string BillingAddressLine2 { get; set; }

        [StringLength(100)]
        public string BillingAddressCity { get; set; }

        [StringLength(100)]
        public string BillingAddressState { get; set; }

        [StringLength(100)]
        public string BillingAddressZip { get; set; }

        [StringLength(100)]
        public string BillingAddressCountry { get; set; }

        public int SubscriptionPlanId { get; set; }

        [StringLength(100)]
        public string VacationApproverEmail { get; set; }

        public int? UpdatedById { get; set; }

        public DateTime? UpdatedOn { get; set; }

        public int? WorkweekStaryDay { get; set; }

        public int? TimezoneId { get; set; }

        [StringLength(20)]
        public string RegistrationCode { get; set; }

        public int? TimePeriodsInFuture { get; set; }

        public virtual CompanyApproved CompanyApproved { get; set; }

        public virtual SubscriptionPlan SubscriptionPlan { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Employee> Employee { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Period> Period { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Task> Task { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<TimeoffRequest> TimeoffRequests { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Timesheet> Timesheet { get; set; }

        public virtual Timezone Timezone { get; set; }
    }
}
