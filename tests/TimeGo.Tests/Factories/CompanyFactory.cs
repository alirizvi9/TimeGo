using System;
using TimeGo.ApplicationDomain.Entities;
using TimeGo.ApplicationDomain.Enums;
using TimeGo.ApplicationDomain.Persistance;
using TimeGo.Tests.Base.Facotries;

namespace TimeGo.Tests.Factories
{
    public class CompanyFactory : BaseFactory<Company>
    {
        public CompanyFactory(IRepository repository)
            : base(repository)
        {
        }

        protected override Company CreateNew()
        {
            return new Company
            {
                CompanyName = "Company " + Counter,
                ContactName = "Contact",
                PhoneNumber = "1234567890",
                EmailAddress = "email@mail.local",
                WorkweekStaryDay = Weekdays.Monday,
                CreatedOn = DateTime.UtcNow,
                SubscriptionPlan = Factory.Create<SubscriptionPlan>(),
                CompanyApproved = Factory.Create<CompanyApproved>(),
                Timezone = Factory.Create<Timezone>()
            };
        }
    }
}
