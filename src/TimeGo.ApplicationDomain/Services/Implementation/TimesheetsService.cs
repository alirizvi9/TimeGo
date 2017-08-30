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
            return _repository.Find<Period>(x => x.CompanyId == user.CompanyId && x.EmployeeId == user.Id).Select(x => new PeriodViewModel()
            {
                Id = x.Id,
                PeriodEnd = x.PeriodEnd,
                PeriodStart = x.PeriodStart
            }).ToList();
        }

        public List<TaskViewModel> GetTasks(Employee user)
        {
            return _repository.Find<Task>(x => x.CompanyId == user.CompanyId).Select(x => new TaskViewModel()
            {
                Id = x.Id,
                TaskName = x.TaskName
            }).ToList();
        }

        public ErrorCodes EditTimesheet(Employee user, TimesheetViewModel model)
        {
            var timesheet = _repository.Find<Timesheet>(x => x.Id == model.Id).SingleOrDefault();
            if (timesheet == null)
                return ErrorCodes.UnknownError;

            var approvalStatus = _repository.Find<ApprovalStatus>(x => x.ApprovalStatusType == model.ApprovalStatus).FirstOrDefault();
            var lockStatus = _repository.Find<LockStatus>(x => x.LockStatusType == "Locked").FirstOrDefault();
            timesheet.EmployeeNotes = model.EmployeeNotes;
            timesheet.ApproverNotes = model.ApproverNotes;
            timesheet.ApprovalStatusId = approvalStatus.Id;

            foreach(var line in model.Lines)
            {
                if(line.Id != 0)
                {
                    var lineDb = _repository.Find<TimesheetLine>(x => x.Id == line.Id).SingleOrDefault();
                    if(lineDb != null)
                    {
                        lineDb.StartTime = line.StartTime.ToUniversalTime();
                        lineDb.EndTime = line.EndTime.ToUniversalTime();
                        lineDb.TaskId = line.TaskId;
                    }
                }
                else
                {
                    var newLine = new TimesheetLine()
                    {
                        Date = line.Date,
                        ApprovedById = user.Id,
                        LockStatusId = lockStatus.Id,
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
            _repository.Save();
            return ErrorCodes.Success;
        }

        public TimesheetViewModel GetTimesheet(Employee user, long periodId)
        {
            var period = _repository.Find<Period>(x => x.Id == periodId).Single();
            var timesheet = _repository.Find<Timesheet>(x => x.PeriodId == periodId && x.EmployeeId == user.Id).Select(x => new TimesheetViewModel()
            {
                ApprovalStatus = x.ApprovalStatus.ApprovalStatusType,
                ApprovedOn = x.ApprovedOn,
                ApproverNotes = x.ApproverNotes,
                EmployeeNotes = x.EmployeeNotes,
                SubmittedOn = x.SubmittedOn,
                Id = x.Id,
            }).FirstOrDefault();
            if (timesheet == null)
            {
                CreateTimesheet(user, periodId);

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
                Task = x.Task.TaskName,
                TaskId = x.TaskId ?? 0,
                Date = x.Date
            }).OrderBy(x => x.Date).ToList();
            return timesheet;
        }

        public void CreateTimesheet(Employee user, long periodId)
        {
            var period = _repository.Find<Period>(x => x.Id == periodId).Single();
            var lockStatus = _repository.Find<LockStatus>(x => x.LockStatusType == "Locked").FirstOrDefault();
            var approvalStatus = _repository.Find<ApprovalStatus>(x => x.ApprovalStatusType == "Waiting for Approval").FirstOrDefault();
            var timesheet = new Timesheet()
            {
                CompanyId = user.CompanyId,
                EmployeeId = user.Id,
                PeriodId = periodId,
                RevisedById = user.Id,
                LockStatusId = lockStatus.Id,
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
                    LockStatusId = lockStatus.Id,
                    ApprovalStatusId = approvalStatus.Id,
                    RevisedById = user.Id,
                    StartTime = DateTime.Now,
                    EndTime = DateTime.Now,
                    TaskId = 1
                });
            }
            timesheet.TimesheetLines = timesheetLines;
            _repository.Add<Timesheet>(timesheet);
            //foreach(var line in timesheetLines)
            //    _repository.Add<TimesheetLine>(line);
            _repository.Save();
        }
    }
}
