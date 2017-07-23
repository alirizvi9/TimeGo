using System;
using TimeGo.ApplicationDomain.Entities;
using TimeGo.ApplicationDomain.Persistance;
using TimeGo.Tests.Base.Facotries;

namespace TimeGo.Tests.Factories
{
    public class SubscriptionPlanFactory : BaseFactory<SubscriptionPlan>
    {
        public SubscriptionPlanFactory(IRepository repository)
            : base(repository)
        {
        }

        protected override SubscriptionPlan CreateNew()
        {
            return new SubscriptionPlan
            {
                SubscriptionPlanType = "Plan " + Counter,
                CreatedOn = DateTime.UtcNow
            };
        }
    }
}
