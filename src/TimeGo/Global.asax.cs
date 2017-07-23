using System;
using System.Web.Http;
using System.Web.Mvc;
using System.Web.Optimization;
using System.Web.Routing;
using AutoMapper;
using TimeGo.ApplicationDomain.AutoMapper;
using TimeGo.ApplicationDomain.Entities;

namespace TimeGo
{
    public class TimeGoApplication : System.Web.HttpApplication
    {
        protected void Application_BeginRequest(object sender, EventArgs e) {
            Response.AddHeader("Cache-Control", "no-cache, no-store, must-revalidate");
            Response.AddHeader("Pragma", "no-cache"); // HTTP 1.0.
            Response.AddHeader("Expires", "0"); // Proxies.
        }

        protected void Application_Start()
        {
            TimeGoEntities context=new TimeGoEntities();
            new TimeGo.DataModel.UpdateDatabase(context.Database.Connection.ConnectionString);

            AutofacConfig.ConfigureContainer();
            AreaRegistration.RegisterAllAreas();
            GlobalConfiguration.Configure(WebApiConfig.Register);
            FilterConfig.RegisterGlobalFilters(GlobalFilters.Filters);
            RouteConfig.RegisterRoutes(RouteTable.Routes);
            BundleConfig.RegisterBundles(BundleTable.Bundles);
            Mapper.Initialize(x => x.AddProfile(new AutoMappingProfile()));
        }
    }
}
