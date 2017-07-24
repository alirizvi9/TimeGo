using System;
using TimeGo.ApplicationDomain.Entities;
using TimeGo.ApplicationDomain.Persistance;
using TimeGo.Tests.Base.Facotries;

namespace TimeGo.Tests.Factories
{
    public class TimeoffRequestFactory : BaseFactory<TimeoffRequest>
    {
        public TimeoffRequestFactory(IRepository repository)
            : base(repository)
        {
        }

        protected override TimeoffRequest CreateNew()
        {
            var now = DateTime.UtcNow;
            return new TimeoffRequest
            {
                FromDate = now.AddDays(1),
                ToDate = now.AddDays(2),
                Reason = "Sick day",
                ApprovedOn = now,
                ApprovalStatus = Factory.Create<ApprovalStatus>(),
                Company = Factory.Create<Company>(),
                Employee = Factory.Create<Employee>(),
                ApprovedBy = Factory.Create<Employee>(),
                CreatedOn = now
            };
        }
    }
}
