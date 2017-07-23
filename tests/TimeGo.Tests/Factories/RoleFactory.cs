using System;
using TimeGo.ApplicationDomain.Entities;
using TimeGo.ApplicationDomain.Persistance;
using TimeGo.Tests.Base.Facotries;

namespace TimeGo.Tests.Factories
{
    public class RoleFactory : BaseFactory<Role>
    {
        public RoleFactory(IRepository repository)
            : base(repository)
        {
        }

        protected override Role CreateNew()
        {
            return new Role
            {
                RoleType = "Company Admin",
                CreatedOn = DateTime.UtcNow
            };
        }
    }
}
