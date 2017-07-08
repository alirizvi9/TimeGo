using System.Web.Http;
using System.Web.Mvc;
using Autofac;
using Autofac.Integration.Mvc;
using Autofac.Integration.WebApi;
using TimeGo.ApplicationDomain;
using TimeGo.ApplicationDomain.Services;
using TimeGo.ApplicationDomain.Services.Implementation;

namespace TimeGo
{
    public class AutofacConfig
    {
        public static void ConfigureContainer()
        {
            var builder = new ContainerBuilder();
            var config = GlobalConfiguration.Configuration;
            var settings = TimeGoSettings.FromWebConfig(System.Configuration.ConfigurationManager.AppSettings);

            builder.RegisterApiControllers(typeof(TimeGoApplication).Assembly);
            builder.RegisterControllers(typeof(TimeGoApplication).Assembly);
            builder.RegisterAssemblyTypes(typeof(TimeGoApplication).Assembly);
            builder.RegisterAssemblyTypes(typeof(TimeGoSettings).Assembly);

            builder.RegisterInstance(settings).As<TimeGoSettings>();
            builder.RegisterType<HttpContextProvider>().As<IHttpContextProvider>();

            builder.RegisterWebApiFilterProvider(config);

            var container = builder.Build();

            DependencyResolver.SetResolver(new AutofacDependencyResolver(container));
            var resolver = new AutofacWebApiDependencyResolver(container);
            GlobalConfiguration.Configuration.DependencyResolver = resolver;
        }
    }
}