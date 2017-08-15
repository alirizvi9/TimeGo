using System.Security.Principal;
using System.Threading;
using System.Web;
using System.Web.Hosting;

namespace TimeGo.ApplicationDomain.Services.Implementation
{
    public class HttpContextProvider : IHttpContextProvider
    {
        public HttpContext Current => HttpContext.Current;

        public HttpRequest GetHttpRequest()
        {
            return Current.Request;
        }

        public HttpResponse GetHttpResponse()
        {
            return Current.Response;
        }

        public IPrincipal GetUser()
        {
            return Thread.CurrentPrincipal;
        }

        public string MapPath(string path)
        {
            return HostingEnvironment.MapPath(path);
        }
    }
}
