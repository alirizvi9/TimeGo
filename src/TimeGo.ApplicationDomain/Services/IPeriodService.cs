using TimeGo.ApplicationDomain.Entities;
using TimeGo.ApplicationDomain.Enums;
using TimeGo.ApplicationDomain.Models;
using TimeGo.ApplicationDomain.Models.Period;

namespace TimeGo.ApplicationDomain.Services
{
    public interface IPeriodService
    {
        ErrorCodes AddPeriod(AddPeriodViewModel model, Employee user);
        ResultsModel<PeriodViewModel> GetPeriods(Employee user, PagingModel model);
        ErrorCodes ChangeStatus(Employee user, long id, string newStatus);
        ErrorCodes Delete(Employee user, long id);
        ErrorCodes EditPeriod(PeriodViewModel model, Employee user);
    }
}
