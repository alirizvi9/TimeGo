using System;
using TimeGo.ApplicationDomain.Entities;
using TimeGo.ApplicationDomain.Persistance;
using TimeGo.Tests.Base.Facotries;

namespace TimeGo.Tests.Factories
{
    public class TimesheetLineFactory : BaseFactory<TimesheetLine>
    {
        public TimesheetLineFactory(IRepository repository)
            : base(repository)
        {
        }

        protected override TimesheetLine CreateNew()
        {
            var now = DateTime.UtcNow;
            return new TimesheetLine
            {
                StartTime = now.AddDays(-1),
                EndTime = now.AddDays(5),
                ApprovedOn = now.AddHours(-12),
                ApprovalStatus = Factory.Create<ApprovalStatus>(),
                RevisedBy = Factory.Create<Employee>(),
                ApprovedBy = Factory.Create<Employee>(),
                LockStatus = Factory.Create<LockStatus>(),
                Timesheet = Factory.Create<Timesheet>(),
                CreatedOn = now
            };
        }
    }
}
