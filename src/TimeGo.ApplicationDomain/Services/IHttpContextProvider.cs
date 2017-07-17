using System.Security.Principal;
using System.Web;

namespace TimeGo.ApplicationDomain.Services
{
    public interface IHttpContextProvider
    {
        HttpContext Current { get; }
        HttpRequest GetHttpRequest();
        HttpResponse GetHttpResponse();
        IPrincipal GetUser();
        string MapPath(string path);
    }
}
