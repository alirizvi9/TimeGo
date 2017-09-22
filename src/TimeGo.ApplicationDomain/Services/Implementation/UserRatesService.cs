using System.Linq;
using System.Linq.Dynamic;
using TimeGo.ApplicationDomain.Entities;
using TimeGo.ApplicationDomain.Enums;
using TimeGo.ApplicationDomain.Models;
using TimeGo.ApplicationDomain.Models.Rates;
using TimeGo.ApplicationDomain.Persistance;

namespace TimeGo.ApplicationDomain.Services.Implementation
{
    public class UserRatesService : IUserRatesService
    {
        private readonly IRepository _repository;

        public UserRatesService(IRepository repository)
        {
            _repository = repository;
        }

        public ResultsModel<RateViewModel> GetRates(Employee user, PagingModel model)
        {
            if (user.Role.RoleType != "Task Manager")
                return new ResultsModel<RateViewModel>();
            var requests = _repository.Find<EmployeeRate>(x => x.CompanyId == user.CompanyId);
            var result = new ResultsModel<RateViewModel>()
            {
                Results = requests.OrderBy(model.SortExpression).Skip(model.PageSize * (model.Page - 1)).Take(model.PageSize).Select(x => new RateViewModel()
                {
                    Id = x.Id,
                    EndDate = x.EffectiveEndDate,
                    StartDate = x.EffectiveStartDate,
                    FirstName = x.Employee.FirstName,
                    LastName = x.Employee.LastName,
                    Rate = x.RateAmount,
                    UserId = x.EmployeeId
                }).ToList(),
                Count = _repository.Find<EmployeeRate>().Count(),
                Page = model.Page
            };
            return result;
        }

        public ErrorCodes AddRate(AddRateViewModel model, Employee user)
        {
            if (user.Role.RoleType != "Task Manager")
                return ErrorCodes.NoAccess;
            var newRate = new EmployeeRate();
            newRate.CompanyId = user.CompanyId;
            newRate.EmployeeId = model.UserId;
            newRate.EffectiveStartDate = model.StartDate;
            newRate.EffectiveEndDate = model.EndDate;
            newRate.RateAmount = model.Rate;
            _repository.Add(newRate);
            _repository.Save();
            return ErrorCodes.Success;
        }

        public ErrorCodes DeleteRate(long id, Employee user)
        {
            if (user.Role.RoleType != "Task Manager")
                return ErrorCodes.NoAccess;
            var rate = _repository.Find<EmployeeRate>(x => x.Id == id).SingleOrDefault();
            if (rate != null)
            {
                _repository.Delete(rate);
                _repository.Save();
            }
            return ErrorCodes.Success;
        }
    }
}
