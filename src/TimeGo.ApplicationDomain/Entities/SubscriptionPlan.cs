using System.Collections.Generic;
using TimeGo.ApplicationDomain.Domain;

namespace TimeGo.ApplicationDomain.Entities
{
    public class SubscriptionPlan : Entity<SubscriptionPlan, long>
    {
        public SubscriptionPlan()
        {
            Company = new HashSet<Company>();
        }

        public string SubscriptionPlanType { get; set; }
        public virtual ICollection<Company> Company { get; set; }
    }
}
