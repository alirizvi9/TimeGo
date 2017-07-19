using System.Data.Entity;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;
using Autofac;
using Autofac.Integration.Mvc;
using Autofac.Integration.WebApi;
using Microsoft.AspNet.Identity.EntityFramework;
using Microsoft.Owin;
using TimeGo.ApplicationDomain;
using TimeGo.ApplicationDomain.Dependency;
using TimeGo.ApplicationDomain.Dependency.Autofac;
using TimeGo.ApplicationDomain.IO;
using TimeGo.ApplicationDomain.IO.FileSystem;
using TimeGo.ApplicationDomain.Persistance;
using TimeGo.ApplicationDomain.Persistance.Implementation;
using TimeGo.ApplicationDomain.Services;
using TimeGo.ApplicationDomain.Services.Implementation;
using TimeGo.Data;
using TimeGo.Web.Mvc;
using TimeGo.Web.Mvc.Models;
using TimeGo.Web.Mvc.Services.Implementation;
using TimeGo.Web.Mvc.Services;

namespace TimeGo
{
    public class AutofacConfig
    {
        public static void ConfigureContainer()
        {
            var builder = new ContainerBuilder();
            var config = GlobalConfiguration.Configuration;
            var settings = TimeGoSettings.FromWebConfig(System.Configuration.ConfigurationManager.AppSettings);

            builder.RegisterApiControllers(typeof(MvcApplication).Assembly);
            builder.RegisterControllers(typeof(MvcApplication).Assembly);
            builder.RegisterAssemblyTypes(typeof(MvcApplication).Assembly);
            builder.RegisterAssemblyTypes(typeof(TimeGoSettings).Assembly);

            //Register services
            builder.RegisterInstance(settings).As<TimeGoSettings>();
            builder.RegisterType<HttpContextProvider>().As<IHttpContextProvider>().InstancePerRequest();
            builder.RegisterType<FileSystemStorageProvider>().As<IStorageProvider>().InstancePerRequest();
            builder.RegisterType<TimeGoEntities>().AsSelf().As<DbContext>().InstancePerRequest();
            builder.RegisterType<Repository>().As<IRepository>().InstancePerRequest();
            builder.RegisterType<CompanyService>().As<ICompanyService>().InstancePerRequest();
            builder.RegisterType<AccountService>().As<IAccountService>().InstancePerRequest();
            builder.RegisterType<AuthorizationService>().As<IAuthorizationService>().InstancePerRequest();
            builder.RegisterType<EmailService>().As<IEmailService>().InstancePerRequest();

            //Register identity
            builder.RegisterType<UserStore<ApplicationUser>>().AsImplementedInterfaces().InstancePerRequest();
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