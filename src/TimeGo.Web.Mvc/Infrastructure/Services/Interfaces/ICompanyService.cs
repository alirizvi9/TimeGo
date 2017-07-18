using TimeGo.Data;

namespace TimeGo.Web.Mvc.Infrastructure.Services.Interfaces
{
    public interface ICompanyService
    {
        Company GetCompanyFromUrl(string url);
    }
}
