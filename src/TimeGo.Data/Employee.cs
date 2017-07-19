using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace TimeGo.Data
{
    [Table("Employee")]
    public class Employee
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public Employee()
        {
            Employee1 = new HashSet<Employee>();
            Task = new HashSet<Task>();
            Task1 = new HashSet<Task>();
            EmployeeRates = new HashSet<EmployeeRate>();
            Period = new HashSet<Period>();
            TaskAllowed = new HashSet<TaskAllowed>();
            TimeoffRequests = new HashSet<TimeoffRequest>();
            Timesheets = new HashSet<Timesheet>();
            Timesheet1 = new HashSet<Timesheet>();
            Timesheet2 = new HashSet<Timesheet>();
            TimesheetLine = new HashSet<TimesheetLine>();
            TimesheetLine1 = new HashSet<TimesheetLine>();
        }

        public int EmployeeId { get; set; }

        public int? CompanyId { get; set; }

        [StringLength(100)]
        public string EmployeeNumber { get; set; }

        [StringLength(100)]
        public string FirstName { get; set; }

        [StringLength(100)]
        public string LastName { get; set; }

        [StringLength(100)]
        public string EmailAddress { get; set; }

        [StringLength(100)]
        public string Password { get; set; }

        [StringLength(4)]
        public string SSN { get; set; }

        public bool IsAdmin { get; set; }

        public bool IsActive { get; set; }

        public bool IsOvertimeCalculated { get; set; }

        public int? UpdatedById { get; set; }

        public DateTime? UpdatedOn { get; set; }

        [StringLength(100)]
        public string Phonenumber { get; set; }

        public int? LoginMethodId { get; set; }

        public int? RoleId { get; set; }

        [StringLength(100)]
        public string UserName { get; set; }

        public bool? ConfirmEmail { get; set; }

        public string Code { get; set; }

        public virtual Company Company { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Employee> Employee1 { get; set; }

        public virtual Employee Employee2 { get; set; }

        public virtual Role Role { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Task> Task { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Task> Task1 { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<EmployeeRate> EmployeeRates { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Period> Period { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<TaskAllowed> TaskAllowed { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<TimeoffRequest> TimeoffRequests { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Timesheet> Timesheets { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Timesheet> Timesheet1 { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Timesheet> Timesheet2 { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<TimesheetLine> TimesheetLine { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<TimesheetLine> TimesheetLine1 { get; set; }
    }
}
