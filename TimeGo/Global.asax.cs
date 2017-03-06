using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;
using System.Web.Optimization;
using System.Web.Routing;
using System.Web.Security;
using System.Web.SessionState;

namespace TimeGo
{
    public class MvcApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            TimeGo.Data.TimeGoEntities context=new TimeGo.Data.TimeGoEntities();
            new TimeGo.DataModel.UpdateDatabase(context.Database.Connection.ConnectionString);




            AreaRegistration.RegisterAllAreas();
            GlobalConfiguration.Configure(WebApiConfig.Register);
            FilterConfig.RegisterGlobalFilters(GlobalFilters.Filters);
            RouteConfig.RegisterRoutes(RouteTable.Routes);
            BundleConfig.RegisterBundles(BundleTable.Bundles);
        }
    }
}
