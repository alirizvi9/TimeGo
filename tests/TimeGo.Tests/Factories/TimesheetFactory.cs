using System;
using TimeGo.ApplicationDomain.Entities;
using TimeGo.ApplicationDomain.Persistance;
using TimeGo.Tests.Base.Facotries;

namespace TimeGo.Tests.Factories
{
    public class TimesheetFactory : BaseFactory<Timesheet>
    {
        public TimesheetFactory(IRepository repository)
            : base(repository)
        {
        }

        protected override Timesheet CreateNew()
        {
            return new Timesheet
            {
                ApproverNotes = "Approver notes",
                EmployeeNotes = "Employee notes",
                ApprovalStatus = Factory.Create<ApprovalStatus>(),
                Company = Factory.Create<Company>(),
                Employee = Factory.Create<Employee>(),
                RevisedBy = Factory.Create<Employee>(),
                ApprovedBy = Factory.Create<Employee>(),
                LockStatus = Factory.Create<LockStatus>(),
                Period = Factory.Create<Period>(),
                CreatedOn = DateTime.UtcNow
            };
        }
    }
}
