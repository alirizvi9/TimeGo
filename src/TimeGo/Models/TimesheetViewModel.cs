using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Web.Mvc;

namespace TimeGo.Models
{
    public class TimesheetViewModel : BaseViewModel
    {
        public IEnumerable<SelectListItem> PeriodListItems { get; set; }
        public IEnumerable<SelectListItem> Timesheets { get; set; }
        public IEnumerable<SelectListItem> TaskListItems { get; set; }

        public int SelectedPeriodId { get; set; }
        public int SelectedEmployeeId { get; set; }
        public List<DateTime> SelectedPeriodDates { get; set; }
        public String TimesheetData { get; set; }
        public String EmployeeNotes { get; set; }
        public String PayroleNotes { get; set; }
        public Boolean IsLocked { get; set; }
        public Boolean IsSave { get; set; }
        public Boolean IsSubmit { get; set; }
        public Boolean IsResubmit { get; set; }
        public Boolean IsApprove { get; set; }
        public DateTime? LastSubmitted { get; set; }
        public DateTime? LastApproved { get; set; }
        public Boolean IsAdmin { get; set; } = false;
        public Boolean IsReviseRequsted { get; set; } = false;

        public int LockStatusId { get; set; } = 0;
        public int ApprovalStatusId { get; set; } = 0;
    }
}
