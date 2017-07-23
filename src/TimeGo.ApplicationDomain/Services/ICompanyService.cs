using TimeGo.ApplicationDomain.Entities;

namespace TimeGo.ApplicationDomain
{
    public interface ICompanyService
    {
        Company GetCompanyFromUrl(string url);
    }
}
