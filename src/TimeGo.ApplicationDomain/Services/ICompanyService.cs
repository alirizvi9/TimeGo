using TimeGo.Data;

namespace TimeGo.ApplicationDomain
{
    public interface ICompanyService
    {
        Company GetCompanyFromUrl(string url);
    }
}
