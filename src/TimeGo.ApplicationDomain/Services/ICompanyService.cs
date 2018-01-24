using System.Collections.Generic;
using TimeGo.ApplicationDomain.Entities;
using TimeGo.ApplicationDomain.Enums;
using TimeGo.ApplicationDomain.Models.CompanyProfile;

namespace TimeGo.ApplicationDomain.Services
{
    public interface ICompanyService
    {
        Company GetCompanyFromUrl(string url);
        IEnumerable<Company> GetAll();
        int Count();
        ErrorCodes EditCompany(Company model);
        ErrorCodes EditCompany(CompanyProfileViewModel model, Employee user);
        ErrorCodes EditBillingAddress(Company model);
        IEnumerable<Company> GetPage(string sortExpression, int page, int pageSize);
        Company GetCompany(long id);
        void DeleteCompany(long id);
        Employee GetCompanyAdmin(long id);
    }
}
