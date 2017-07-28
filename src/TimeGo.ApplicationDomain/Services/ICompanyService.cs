using System.Collections.Generic;
using TimeGo.ApplicationDomain.Entities;
using TimeGo.ApplicationDomain.Enums;

namespace TimeGo.ApplicationDomain.Services
{
    public interface ICompanyService
    {
        Company GetCompanyFromUrl(string url);
        IEnumerable<Company> GetAll(string sortExpression, int page, int pageSize);
        ErrorCodes EditCompany(Company model);
    }
}
