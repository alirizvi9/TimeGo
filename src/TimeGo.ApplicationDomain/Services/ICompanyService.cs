using TimeGo.ApplicationDomain.Entities;

namespace TimeGo.ApplicationDomain.Services
{
    public interface ICompanyService
    {
        Company GetCompanyFromUrl(string url);
    }
}
