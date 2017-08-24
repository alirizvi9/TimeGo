using System.Collections.Generic;
using TimeGo.ApplicationDomain.Entities;
using TimeGo.ApplicationDomain.Models.Period;
using TimeGo.ApplicationDomain.Models.Task;
using TimeGo.ApplicationDomain.Models.Timesheets;

namespace TimeGo.ApplicationDomain.Services
{
    public interface ITimesheetsService
    {
        List<PeriodViewModel> GetPeriods(Employee user);
        TimesheetViewModel GetTimesheet(Employee user, long periodId);
        List<TaskViewModel> GetTasks(Employee user);
    }
}
