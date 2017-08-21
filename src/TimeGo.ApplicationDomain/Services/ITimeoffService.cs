using TimeGo.ApplicationDomain.Entities;
using TimeGo.ApplicationDomain.Enums;
using TimeGo.ApplicationDomain.Models;
using TimeGo.ApplicationDomain.Models.Timeoff;

namespace TimeGo.ApplicationDomain.Services
{
    public interface ITimeoffService
    {
        ErrorCodes AddTimeoff(AddTimeoffViewModel model, Employee userId);
        ResultsModel<TimeofViewModel> GetTimeoffRequestes(Employee user, PagingModel model);
        ErrorCodes ChangeStatus(long id, string newStatus);
    }
}
