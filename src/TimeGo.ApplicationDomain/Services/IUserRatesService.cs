using TimeGo.ApplicationDomain.Entities;
using TimeGo.ApplicationDomain.Enums;
using TimeGo.ApplicationDomain.Models;
using TimeGo.ApplicationDomain.Models.Rates;

namespace TimeGo.ApplicationDomain.Services
{
    public interface IUserRatesService
    {
        ResultsModel<RateViewModel> GetRates(Employee user, PagingModel model);
        ErrorCodes AddRate(AddRateViewModel model, Employee user);
        ErrorCodes DeleteRate(long id, Employee user);
    }
}
