using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Web.Mvc;
using TimeGo.ApplicationDomain.Entities;

namespace TimeGo.Web.Mvc.Models
{
    public class AdminViewModel : BaseViewModel {
        [Required]
        public new string CompanyName { get; set; }

        [Required]
        public string ContactName { get; set; }

        [Required]
        public string PhoneNumber { get; set; }

        [Required]
        public string Email { get; set; }

        [Required]
        public string CompanyUrl { get; set; }

        [Required]
        public string VacationApproverEmail { get; set; }

        public int NumberOfTimesheetRequests { get; set; } = 0;
        public int NumberOfTimeoffRequests { get; set; } = 0;
    }


    public class AdminCodesViewModel : BaseViewModel {
        public List<Task> Tasks { get; set; }

        public Task SelectedTask { get; set; } = new Task();

        public List<SelectListItem> Employees { get; set; }

        public bool EditTaskName { get; set; }

        public bool IsActive { get; set; }
    }


    public class AdminAllowedCodesViewModel : BaseViewModel {
        public List<SelectListItem> Employees { get; set; }
        public int EmployeeId { get; set; }

        public List<System.Web.Mvc.SelectListItem> Tasks { get; set; }
        public String SelectedTasks { get; set; }
    }

    public class AdminUsersViewModel : BaseViewModel {
        public List<Employee> Employees { get; set; }
        public Employee SelectedEmployee { get; set; } = new Employee();
        public List<SelectListItem> Roles { get; set; }
    }

    public class AdminUserRatesViewModel : BaseViewModel {
        public List<EmployeeRate> EmployeeRates { get; set; }
        public List<SelectListItem> Employees { get; set; }
        public int EmployeeId { get; set; }
        public EmployeeRate SelectedEmployeeRate   { get; set; } = new EmployeeRate();
    }

    public class AdminPeriodsViewModel : BaseViewModel {
        public List<Period> Periods { get; set; }
        public IEnumerable<SelectListItem> LockedPeriods { get; set; }
        public IEnumerable<SelectListItem> UnlockedPeriods { get; set; }
        public Period SelectedPeriod { get; set; }

        public int LockedPeriodId;
        public int UnlockedPeriodId;
    }
}