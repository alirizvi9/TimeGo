using System;
using System.Collections.Generic;
using TimeGo.ApplicationDomain.Entities;
using TimeGo.ApplicationDomain.Enums;
using TimeGo.ApplicationDomain.Models.Timeoff;
using TimeGo.ApplicationDomain.Persistance;
using System.Linq;
using System.Linq.Dynamic;
using TimeGo.ApplicationDomain.Models;

namespace TimeGo.ApplicationDomain.Services.Implementation
{
    public class TimeoffService : ITimeoffService
    {
        private readonly IRepository _repository;

        public TimeoffService(IRepository repository)
        {
            _repository = repository;
        }

        public IEnumerable<TimeofViewModel> GetTimeoffRequestes(Employee user, PagingModel model)
        {
            return _repository.Find<TimeoffRequest>(x => x.CompanyId == user.CompanyId).OrderBy(model.SortExpression).Skip(model.PageSize * (model.Page - 1)).Take(model.PageSize).Select(x=>new TimeofViewModel()
            {
                EndDate = x.ToDate,
                StartDate = x.FromDate,
                ReturningToWork = x.ReturningToWork,
                Id = x.Id,
                Reasone = x.Reason,
                UserName = x.Employee.FirstName
            });
        }

        public ErrorCodes AddTimeoff(AddTimeoffViewModel model, Employee user)
        {
            var newTimeoffRequest = new TimeoffRequest();
            var approvalStatus = _repository.Find<ApprovalStatus>(x => x.Id == 4).SingleOrDefault();
            newTimeoffRequest.ReturningToWork = model.ReturningToWork ?? DateTime.Now;
            newTimeoffRequest.ToDate = model.EndDate ?? DateTime.Now;
            newTimeoffRequest.FromDate = model.StartDate ?? DateTime.Now;
            newTimeoffRequest.EmployeeId = user.Id;
            newTimeoffRequest.CompanyId = user.CompanyId;
            newTimeoffRequest.Reason = model.Reasone;
            newTimeoffRequest.ApprovalStatusId = approvalStatus.Id;
            newTimeoffRequest.ApprovalStatus = approvalStatus;
            newTimeoffRequest.ApprovedById = user.Id;
            newTimeoffRequest.ModifiedOn = DateTime.Now;
            _repository.Add(newTimeoffRequest);
            _repository.Save();
            return ErrorCodes.Success;
        }
    }
}
