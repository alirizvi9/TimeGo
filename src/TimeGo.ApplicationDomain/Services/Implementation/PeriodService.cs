using System.Linq.Dynamic;
using System.Linq;
using TimeGo.ApplicationDomain.Entities;
using TimeGo.ApplicationDomain.Models;
using TimeGo.ApplicationDomain.Models.Period;
using TimeGo.ApplicationDomain.Persistance;
using TimeGo.ApplicationDomain.Enums;

namespace TimeGo.ApplicationDomain.Services.Implementation
{
    public class PeriodService : IPeriodService
    {
        private readonly IRepository _repository;

        public PeriodService(IRepository repository)
        {
            _repository = repository;
        }

        public ResultsModel<PeriodViewModel> GetPeriods(Employee user, PagingModel model)
        {
            if (user.Role.RoleType != "Task Manager")
                return new ResultsModel<PeriodViewModel>();
            var periods = _repository.Find<Period>(x => x.CompanyId == user.CompanyId);
            var result = new ResultsModel<PeriodViewModel>()
            {
                Results = periods.OrderBy(model.SortExpression).Skip(model.PageSize * (model.Page - 1)).Take(model.PageSize).Select(x=>new PeriodViewModel() {
                    Id = x.Id,
                    PeriodEnd = x.PeriodEnd,
                    PeriodStart = x.PeriodStart,
                    Reminder1 = x.Reminder1Date,
                    Reminder2 = x.Reminder2Date,
                    Status = x.LockStatus.LockStatusType
                }).ToList(),
                Count = _repository.Find<Period>().Count(),
                Page = model.Page
            };
            return result;
        }

        public ErrorCodes ChangeStatus(Employee user, long id, string newStatus)
        {
            var period = _repository.Find<Period>(x => x.Id == id).SingleOrDefault();
            var lockStatus = _repository.Find<LockStatus>(x => x.LockStatusType == newStatus).SingleOrDefault();
            var timesheets = _repository.Find<Timesheet>(x => x.PeriodId == id);
            if (period == null)
                return ErrorCodes.NotFoundTimeoffRequest;
            if (lockStatus == null)
                return ErrorCodes.NotFoundStatus;

            period.LockStatus = lockStatus;
            period.LockStatusId = lockStatus.Id;
            foreach(var timesheet in timesheets)
            {
                timesheet.LockStatusId = lockStatus.Id;
                timesheet.LockStatus = lockStatus;
            }
            _repository.Save();
            return ErrorCodes.Success;
        }

        public ErrorCodes AddPeriod(AddPeriodViewModel model, Employee user)
        {
            if (model == null)
                return ErrorCodes.UnknownError;
            var endDate = model.StartDate.AddDays(7);
            var lockStatus = _repository.Find<LockStatus>(x => x.LockStatusType == "Locked").SingleOrDefault();
            var newPeriod = new Period()
            {
                LockStatusId = lockStatus.Id,
                EmployeeId = user.Id,
                CompanyId = (long)user.CompanyId,
                PeriodStart = model.StartDate,
                PeriodEnd = endDate,
                Reminder1Date = model.Reminder1,
                Reminder2Date = model.Reminder2
            };
            _repository.Add(newPeriod);
            _repository.Save();
            return ErrorCodes.Success;
        }

        public ErrorCodes Delete(Employee user, long id)
        {
            if (user.Role.RoleType != "Task Manager")
                return ErrorCodes.UnknownError;

            var period = _repository.Find<Period>(x => x.Id == id).SingleOrDefault();
            var timesheets = _repository.Find<Timesheet>(x => x.PeriodId == id);

            foreach (var timesheet in timesheets)
            {
                var lines = _repository.Find<TimesheetLine>(x => x.TimesheetId == timesheet.Id);
                foreach(var line in lines)
                {
                    _repository.Delete(line);
                }
                _repository.Delete(timesheet);
            }
            _repository.Delete(period);
            _repository.Save();
            return ErrorCodes.Success;
        }
    }
}
