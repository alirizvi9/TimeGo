using System;
using System.Collections.Generic;
using TimeGo.ApplicationDomain.Domain;

namespace TimeGo.ApplicationDomain.Entities
{
    public class Employee : Entity<Employee, long>
    {
        public Employee()
        {
            EmployeeRates = new HashSet<EmployeeRate>();
            Period = new HashSet<Period>();
            TaskAllowed = new HashSet<TaskAllowed>();
            TimeoffRequests = new HashSet<TimeoffRequest>();
            Timesheets = new HashSet<Timesheet>();
        }

        public string EmployeeNumber { get; set; }
        public string UserName { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string EmailAddress { get; set; }
        public string Password { get; set; }
        public string PhoneNumber { get; set; }
        public string SocialSecurityNumber { get; set; }
        public string Code { get; set; }
        public bool IsAdmin { get; set; }
        public bool IsRegistrate { get; set; }
        public bool IsActive { get; set; }
        public bool IsOvertimeCalculated { get; set; }
        public DateTime? InviteOn { get; set; }
        public long? CompanyId { get; set; }
        public long? LoginMethodId { get; set; }
        public long? RoleId { get; set; }
        public bool? ConfirmEmail { get; set; }
        public virtual Company Company { get; set; }
        public virtual Role Role { get; set; }
        public virtual ICollection<EmployeeRate> EmployeeRates { get; set; }
        public virtual ICollection<Period> Period { get; set; }
        public virtual ICollection<TaskAllowed> TaskAllowed { get; set; }
        public virtual ICollection<TimeoffRequest> TimeoffRequests { get; set; }
        public virtual ICollection<Timesheet> Timesheets { get; set; }
    }
}
