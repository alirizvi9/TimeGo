using System.Collections.Generic;
using TimeGo.ApplicationDomain.Entities;
using TimeGo.ApplicationDomain.Enums;
using TimeGo.ApplicationDomain.Models;
using TimeGo.ApplicationDomain.Models.Timeoff;

namespace TimeGo.ApplicationDomain.Services
{
    public interface ITimeoffService
    {
        IEnumerable<TimeofViewModel> GetTimeoffRequestes(Employee user, PagingModel model);
        ErrorCodes AddTimeoff(AddTimeoffViewModel model, Employee userId);
    }
}
