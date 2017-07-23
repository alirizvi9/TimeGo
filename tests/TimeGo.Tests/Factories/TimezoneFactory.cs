using System;
using TimeGo.ApplicationDomain.Entities;
using TimeGo.ApplicationDomain.Persistance;
using TimeGo.Tests.Base.Facotries;

namespace TimeGo.Tests.Factories
{
    public class ApprovalStatusFactory : BaseFactory<ApprovalStatus>
    {
        public ApprovalStatusFactory(IRepository repository)
            : base(repository)
        {
        }

        protected override ApprovalStatus CreateNew()
        {
            return new ApprovalStatus
            {
                ApprovalStatusType = "Status " + Counter,
                CreatedOn = DateTime.UtcNow
            };
        }
    }
}
