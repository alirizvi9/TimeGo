using System;
using TimeGo.ApplicationDomain.Entities;
using TimeGo.ApplicationDomain.Persistance;
using TimeGo.Tests.Base.Facotries;

namespace TimeGo.Tests.Factories
{
    public class CompanyApprovedFactory : BaseFactory<CompanyApproved>
    {
        public CompanyApprovedFactory(IRepository repository)
            : base(repository)
        {
        }

        protected override CompanyApproved CreateNew()
        {
            return new CompanyApproved
            {
                CompanyApprovedType = "Company Approved",
                CreatedOn = DateTime.UtcNow
            };
        }
    }
}
