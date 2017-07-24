using System;
using TimeGo.ApplicationDomain.Entities;
using TimeGo.ApplicationDomain.Persistance;
using TimeGo.Tests.Base.Facotries;

namespace TimeGo.Tests.Factories
{
    public class PeriodFactory : BaseFactory<Period>
    {
        public PeriodFactory(IRepository repository)
            : base(repository)
        {
        }

        protected override Period CreateNew()
        {
            var now = DateTime.UtcNow;
            return new Period
            {
                PeriodStart = now.AddDays(-1),
                PeriodEnd = now.AddDays(6),
                Reminder1Date = now.AddDays(-2),
                Company = Factory.Create<Company>(),
                Employee = Factory.Create<Employee>(),
                CreatedOn = now
            };
        }
    }
}
