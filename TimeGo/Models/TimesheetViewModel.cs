using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Web.Mvc;

namespace TimeGo.Models
{
    public class TimesheetViewModel : BaseViewModel
    {
        public IEnumerable<SelectListItem> PeriodListItems { get; set; }
        public IEnumerable<SelectListItem> TaskListItems { get; set; }

        public int SelectedPeriodId { get; set; }
        public List<DateTime> SelectedPeriodDates { get; set; }
        public String TimesheetData { get; set; }
        public String EmployeeNotes { get; set; }
        public Boolean IsLocked { get; set; }
        public Boolean IsSave { get; set; }
        public Boolean IsSubmit { get; set; }
        public DateTime? LastSubmitted { get; set; }
    }
}
