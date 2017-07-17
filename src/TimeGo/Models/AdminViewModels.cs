using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace TimeGo.Models {
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
        public new string CompanyURL { get; set; }

        [Required]
        public string VacationApproverEmail { get; set; }

        public int NumberOfTimesheetRequests { get; set; } = 0;
        public int NumberOfTimeoffRequests { get; set; } = 0;
    }


    public class AdminCodesViewModel : BaseViewModel {
        public List<Data.Task> Tasks { get; set; }

        public Data.Task SelectedTask { get; set; } = new Data.Task();

        public List<System.Web.Mvc.SelectListItem> Employees { get; set; }

        public bool EditTaskName { get; set; }

        public bool IsActive { get; set; }
    }


    public class AdminAllowedCodesViewModel : BaseViewModel {
        public List<System.Web.Mvc.SelectListItem> Employees { get; set; }
        public int EmployeeId { get; set; }

        public List<System.Web.Mvc.SelectListItem> Tasks { get; set; }
        public String SelectedTasks { get; set; }
    }

    public class AdminUsersViewModel : BaseViewModel {
        public List<Data.Employee> Employees { get; set; }
        public Data.Employee SelectedEmployee { get; set; } = new Data.Employee();
        public List<System.Web.Mvc.SelectListItem> Roles { get; set; }
    }

    public class AdminUserRatesViewModel : BaseViewModel {
        public List<Data.EmployeeRate> EmployeeRates { get; set; }
        public List<System.Web.Mvc.SelectListItem> Employees { get; set; }
        public int EmployeeId { get; set; }
        public Data.EmployeeRate SelectedEmployeeRate   { get; set; } = new Data.EmployeeRate();
    }

    public class AdminPeriodsViewModel : BaseViewModel {
        public List<Data.Period> Periods { get; set; }
        public IEnumerable<SelectListItem> LockedPeriods { get; set; }
        public IEnumerable<SelectListItem> UnlockedPeriods { get; set; }
        public Data.Period SelectedPeriod { get; set; }

        public int LockedPeriodId;
        public int UnlockedPeriodId;
    }
}