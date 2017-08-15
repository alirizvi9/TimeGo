using System;
using TimeGo.ApplicationDomain.Entities;
using TimeGo.ApplicationDomain.Persistance;
using TimeGo.Tests.Base.Facotries;

namespace TimeGo.Tests.Factories
{
    public class EmployeeRateFactory : BaseFactory<EmployeeRate>
    {
        public EmployeeRateFactory(IRepository repository)
            : base(repository)
        {
        }

        protected override EmployeeRate CreateNew()
        {
            var now = DateTime.UtcNow;
            return new EmployeeRate
            {
                EffectiveStartDate = now,
                EffectiveEndDate = now.AddDays(5),
                RateAmount = 15.0m,
                Company = Factory.Create<Company>(),
                Employee = Factory.Create<Employee>(),
                CreatedOn = DateTime.UtcNow
            };
        }
    }
}
