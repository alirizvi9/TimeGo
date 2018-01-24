using System;
using System.Collections.Generic;
using System.Linq;
using TimeGo.ApplicationDomain.Entities;
using TimeGo.ApplicationDomain.Enums;
using TimeGo.ApplicationDomain.Models.Period;
using TimeGo.ApplicationDomain.Models.Task;
using TimeGo.ApplicationDomain.Models.Timesheets;
using TimeGo.ApplicationDomain.Persistance;

namespace TimeGo.ApplicationDomain.Services.Implementation
{
    public class TimesheetsService : ITimesheetsService
    {
        private readonly IRepository _repository;

        public TimesheetsService(IRepository repository)
        {
            _repository = repository;
        }

        public List<PeriodViewModel> GetPeriods(Employee user)
        {
            return _repository.Find<Period>(x => x.CompanyId == user.CompanyId).Select(x => new PeriodViewModel()
            {
                Id = x.Id,
                PeriodEnd = x.PeriodEnd,
                PeriodStart = x.PeriodStart
            }).ToList();
        }

        public List<TaskViewModel> GetTasks(Employee user)
        {
            if (user.Role.RoleType == "Task Manager")
            {
                return _repository.Find<Task>(x => x.CompanyId == user.CompanyId).Select(x => new TaskViewModel()
                {
                    Id = x.Id,
                    TaskName = x.TaskName
                }).ToList();
            }
            return _repository.Find<Task>(x => x.CompanyId == user.CompanyId && x.TaskAllowed.Any(t=>t.EmployeeId == user.Id)).Select(x => new TaskViewModel()
            {
                Id = x.Id,
                TaskName = x.TaskName
            }).ToList();
        }

        public ErrorCodes Submit(Employee user, long id)
        {
            var timesheet = _repository.Find<Timesheet>(x => x.Id == id).SingleOrDefault();
            var approveStatus = _repository.Find<ApprovalStatus>(x => x.ApprovalStatusType == "Submitted").SingleOrDefault();
            if (timesheet == null)
                return ErrorCodes.UnknownError;

            if(timesheet.ApprovedById == user.Id)
            {
                timesheet.SubmittedOn = DateTime.Now;
                timesheet.ApprovalStatusId = approveStatus.Id;
                _repository.Save();
            }
            return ErrorCodes.Success;
        }

        public ErrorCodes Approve(Employee user, long id)
        {
            var timesheet = _repository.Find<Timesheet>(x => x.Id == id).SingleOrDefault();
            var approveStatus = _repository.Find<ApprovalStatus>(x => x.ApprovalStatusType == "Approved").SingleOrDefault();
            if (timesheet == null)
                return ErrorCodes.UnknownError;

            if (timesheet.ApprovedById == user.Id)
            {
                timesheet.ApprovedOn = DateTime.Now;
                timesheet.ApprovalStatusId = approveStatus.Id;
                _repository.Save();
            }
            return ErrorCodes.Success;
        }

        public ErrorCodes Unlock(Employee user, long id)
        {
            var timesheet = _repository.Find<Timesheet>(x => x.Id == id).SingleOrDefault();
            var lockStatus = _repository.Find<LockStatus>(x => x.LockStatusType == "Request to unlock").SingleOrDefault();
            if (timesheet == null)
                return ErrorCodes.UnknownError;

            if (timesheet.ApprovedById == user.Id)
            {
                timesheet.LockStatusId = lockStatus.Id;
                _repository.Save();
            }
            return ErrorCodes.Success;
        }

        public ErrorCodes EditTimesheet(Employee user, TimesheetViewModel model)
        {
            var timesheet = _repository.Find<Timesheet>(x => x.Id == model.Id).SingleOrDefault();
            if (timesheet == null)
                return ErrorCodes.UnknownError;

            var approvalStatus = _repository.Find<ApprovalStatus>(x => x.ApprovalStatusType == model.ApprovalStatus).FirstOrDefault();
            var status = model.Lock ? "Locked" : "Unlocked";
            var lockStatus = _repository.Find<LockStatus>(x => x.LockStatusType == status).FirstOrDefault();
            timesheet.EmployeeNotes = model.EmployeeNotes;
            timesheet.ApproverNotes = model.ApproverNotes;
            timesheet.ApprovalStatusId = approvalStatus.Id;
            if(timesheet.LockStatus.LockStatusType == "Request to unlock" && !model.Lock || timesheet.LockStatus.LockStatusType != "Request to unlock")
                timesheet.LockStatusId = lockStatus.Id;
            var dbLines = _repository.Find<TimesheetLine>(x => x.TimesheetId == model.Id).ToList();
            foreach (var line in model.Lines)
            {
                if(line.Id != 0)
                {
                    var lineDb = dbLines.SingleOrDefault(x => x.Id == line.Id);
                    if(lineDb != null)
                    {
                        lineDb.StartTime = line.StartTime.ToUniversalTime();
                        lineDb.EndTime = line.EndTime.ToUniversalTime();
                        lineDb.TaskId = line.TaskId != 0 ? line.TaskId : 1;
                    }
                }
                else
                {
                    var newLine = new TimesheetLine()
                    {
                        Date = line.Date,
                        ApprovedById = user.Id,
                        ApprovalStatusId = approvalStatus.Id,
                        RevisedById = user.Id,
                        StartTime = line.StartTime.ToUniversalTime(),
                        EndTime = line.EndTime.ToUniversalTime(),
                        TaskId = line.TaskId != 0 ? line.TaskId : 1,
                        TimesheetId = timesheet.Id
                    };
                    _repository.Add(newLine);
                }
            }
            var removedLines = dbLines.Where(x => model.Lines.All(l => l.Id != x.Id));
            foreach(var line in removedLines)
            {
                _repository.Delete(line);
            }
            _repository.Save();
            return ErrorCodes.Success;
        }

        public TimesheetViewModel GetTimesheet(Employee user, long periodId, long userId)
        {
            if (periodId == 0)
                return new TimesheetViewModel();
            var period = _repository.Find<Period>(x => x.Id == periodId).Single();
            userId = userId != 0 ? userId : user.Id;
            var timesheet = _repository.Find<Timesheet>(x => x.PeriodId == periodId && x.EmployeeId == userId).Select(x => new TimesheetViewModel()
            {
                ApprovalStatus = x.ApprovalStatus.ApprovalStatusType,
                ApprovedOn = x.ApprovedOn,
                ApproverNotes = x.ApproverNotes,
                EmployeeNotes = x.EmployeeNotes,
                SubmittedOn = x.SubmittedOn,
                Id = x.Id,
                ApprovedBy = x.ApprovedBy !=null ? x.ApprovedBy.FirstName + x.ApprovedBy.LastName:string.Empty,
                RevisedBy = x.RevisedBy != null ? x.RevisedBy.FirstName + x.RevisedBy.LastName : string.Empty,
                RevisedOn = x.RevisedOn,
                Lock = x.LockStatus.LockStatusType != "Unlocked"
            }).FirstOrDefault();
            if (timesheet == null)
            {
                CreateTimesheet(userId, periodId);

                timesheet = _repository.Find<Timesheet>(x => x.PeriodId == periodId && x.EmployeeId == user.Id).Select(x => new TimesheetViewModel()
                {
                    ApprovalStatus = x.ApprovalStatus.ApprovalStatusType,
                    ApprovedOn = x.ApprovedOn,
                    ApproverNotes = x.ApproverNotes,
                    EmployeeNotes = x.EmployeeNotes,
                    SubmittedOn = x.SubmittedOn,
                    Id = x.Id,
                }).FirstOrDefault();
            }
            timesheet.Lines = _repository.Find<TimesheetLine>(x => x.TimesheetId == timesheet.Id).ToList().Select(x => new TimesheetLineViewModel()
            {
                Id = x.Id,
                StartTime = DateTime.SpecifyKind(x.StartTime, DateTimeKind.Utc),
                EndTime = DateTime.SpecifyKind(x.EndTime, DateTimeKind.Utc),
                Task = x.Task?.TaskName,
                TaskId = x.TaskId ?? 0,
                Date = x.Date
            }).OrderBy(x => x.Date).ToList();
            return timesheet;
        }

        public void CreateTimesheet(long userId, long periodId)
        {
            var period = _repository.Find<Period>(x => x.Id == periodId).Single();
            var user = _repository.Find<Employee>(x => x.Id == userId).SingleOrDefault();
            var approvalStatus = _repository.Find<ApprovalStatus>(x => x.ApprovalStatusType == "Waiting for Approval").FirstOrDefault();
            var timesheet = new Timesheet()
            {
                CompanyId = user.CompanyId,
                EmployeeId = user.Id,
                PeriodId = periodId,
                RevisedById = user.Id,
                LockStatusId = period.LockStatus.Id,
                ApprovalStatusId = approvalStatus.Id,
                ApprovedById = user.Id
            };
            var timesheetLines = new List<TimesheetLine>();

            for (var date = (DateTime)period.PeriodStart; date.Date <= period.PeriodEnd; date = date.AddDays(1))
            {
                timesheetLines.Add(new TimesheetLine()
                {
                    Date = date,
                    ApprovedById = user.Id,
                    ApprovalStatusId = approvalStatus.Id,
                    RevisedById = user.Id,
                    StartTime = date,
                    EndTime = date,
                    TaskId = 1
                });
            }
            timesheet.TimesheetLines = timesheetLines;
            _repository.Add<Timesheet>(timesheet);
            _repository.Save();
        }
    }
}
