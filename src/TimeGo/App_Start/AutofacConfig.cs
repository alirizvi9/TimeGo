using System.Data.Entity;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;
using Autofac;
using Autofac.Integration.Mvc;
using Autofac.Integration.WebApi;
using Microsoft.AspNet.Identity.EntityFramework;
using Microsoft.AspNet.Identity.Owin;
using Microsoft.Owin;
using Microsoft.Owin.Security.DataProtection;
using TimeGo.ApplicationDomain;
using TimeGo.ApplicationDomain.Dependency;
using TimeGo.ApplicationDomain.Dependency.Autofac;
using TimeGo.ApplicationDomain.Entities;
using TimeGo.ApplicationDomain.IO;
using TimeGo.ApplicationDomain.IO.FileSystem;
using TimeGo.ApplicationDomain.Persistance;
using TimeGo.ApplicationDomain.Persistance.Implementation;
using TimeGo.ApplicationDomain.Services;
using TimeGo.ApplicationDomain.Services.Implementation;
using TimeGo.Models;

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

            //Register services
            builder.RegisterInstance(settings).As<TimeGoSettings>();
            builder.RegisterType<HttpContextProvider>().As<IHttpContextProvider>().InstancePerRequest();
            builder.RegisterType<FileSystemStorageProvider>().As<IStorageProvider>().InstancePerRequest();
            builder.RegisterType<TimeGoEntities>().AsSelf().As<DbContext>().InstancePerRequest();
            builder.RegisterType<Repository>().As<IRepository>().InstancePerRequest();

            //Register identity
            builder.RegisterType<UserStore<ApplicationUser>>().AsImplementedInterfaces().InstancePerRequest();
            builder.Register(x => new IdentityFactoryOptions<ApplicationUserManager>
            {
                DataProtectionProvider = new DpapiDataProtectionProvider("TimeGo")
            }).InstancePerRequest();
            builder.RegisterType<ApplicationUserManager>().InstancePerRequest();
            builder.Register(ctx => HttpContext.Current.GetOwinContext()).As<IOwinContext>();

            //Register filters
            builder.RegisterFilterProvider();
            builder.RegisterWebApiFilterProvider(config);

            var container = builder.Build();

            DependencyResolver.SetResolver(new AutofacDependencyResolver(container));
            var resolver = new AutofacWebApiDependencyResolver(container);
            GlobalConfiguration.Configuration.DependencyResolver = resolver;

            ComponentContainer.Current = new AutofacComponentContainer(container);
        }
    }
}