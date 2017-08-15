using System;
using TimeGo.ApplicationDomain.Entities;
using TimeGo.ApplicationDomain.Persistance;
using TimeGo.Tests.Base.Facotries;

namespace TimeGo.Tests.Factories
{
    public class LockStatusFactory : BaseFactory<LockStatus>
    {
        public LockStatusFactory(IRepository repository)
            : base(repository)
        {
        }

        protected override LockStatus CreateNew()
        {
            return new LockStatus
            {
                LockStatusType = "LockStatus " + Counter,
                CreatedOn = DateTime.UtcNow
            };
        }
    }
}
