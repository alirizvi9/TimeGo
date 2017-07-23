using System;
using TimeGo.ApplicationDomain.Entities;
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
                CreatedOn = DateTime.UtcNow,
            };
        }
    }
}
