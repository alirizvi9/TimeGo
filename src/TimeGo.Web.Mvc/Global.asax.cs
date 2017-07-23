using System.Web;
using System.Web.Http;
using System.Web.Mvc;
using System.Web.Optimization;
using System.Web.Routing;

namespace TimeGo.Web.Mvc
{
    public class TimeGoApplication : HttpApplication
    {
        protected void Application_Start()
        {
            NinjectConfig.ConfigureKernel();
            AutoMapperConfig.RegisterMappings();
            DatabaseConfig.Initialize();
            AreaRegistration.RegisterAllAreas();
            GlobalConfiguration.Configure(WebApiConfig.Register);
            RouteConfig.RegisterRoutes(RouteTable.Routes);
            BundleConfig.RegisterBundles(BundleTable.Bundles);
        }
    }
}
