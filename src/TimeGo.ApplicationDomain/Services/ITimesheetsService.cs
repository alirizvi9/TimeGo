using System.Collections.Generic;
using TimeGo.ApplicationDomain.Entities;
using TimeGo.ApplicationDomain.Enums;
using TimeGo.ApplicationDomain.Models.Period;
using TimeGo.ApplicationDomain.Models.Task;
using TimeGo.ApplicationDomain.Models.Timesheets;

namespace TimeGo.ApplicationDomain.Services
{
    public interface ITimesheetsService
    {
        List<PeriodViewModel> GetPeriods(Employee user);
        List<TaskViewModel> GetTasks(Employee user);
        ErrorCodes EditTimesheet(Employee user, TimesheetViewModel model);
        TimesheetViewModel GetTimesheet(Employee user, long periodId, long userId);
        ErrorCodes Submit(Employee user, long id);
        ErrorCodes Approve(Employee user, long id);
        ErrorCodes Unlock(Employee user, long id);
    }
}
