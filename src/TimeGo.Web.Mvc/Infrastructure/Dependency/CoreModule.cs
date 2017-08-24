using System;
using System.Data.Entity;
using System.Web;
using System.Web.Mvc;
using Microsoft.AspNet.SignalR;
using Microsoft.AspNet.SignalR.Hubs;
using Microsoft.Owin;
using Ninject;
using Ninject.Modules;
using Ninject.Web.Common;
using Ninject.Web.Mvc.FilterBindingSyntax;
using TimeGo.ApplicationDomain;
using TimeGo.ApplicationDomain.Caching;
using TimeGo.ApplicationDomain.Entities;
using TimeGo.ApplicationDomain.IO;
using TimeGo.ApplicationDomain.IO.FileSystem;
using TimeGo.ApplicationDomain.Persistance;
using TimeGo.ApplicationDomain.Persistance.Implementation;
using TimeGo.ApplicationDomain.Services;
using TimeGo.ApplicationDomain.Services.Implementation;
using TimeGo.ApplicationDomain.SignalR.Implementation;
using TimeGo.Web.Mvc.Infrastructure.Services;
using TimeGo.Web.Mvc.Infrastructure.Services.Implementation;

namespace TimeGo.Web.Mvc.Infrastructure.Dependency
{
    public class CoreModule : NinjectModule
    {
        private readonly TimeGoSettings _settings;

        public CoreModule(TimeGoSettings settings)
        {
            _settings = settings;
        }

        public override void Load()
        {
            Bind<Func<IKernel>>().ToMethod(ctx => () => new Bootstrapper().Kernel);
            Bind<IHttpModule>().To<HttpApplicationInitializationHttpModule>();

            Bind<DbContext>().To<TimeGoEntities>().InRequestScope();
            Bind<TimeGoEntities>().ToSelf().InRequestScope();
            Bind<IRepository>().To<Repository>().InRequestScope();
            Bind<IUnitOfWorkProvider>().To<UnitOfWorkProvider>().InRequestScope();

            Bind<IOwinContext>().ToMethod(ctx => HttpContext.Current.GetOwinContext()).InRequestScope();

            //Kernel.BindFilter<UnitOfWorkFilter>(FilterScope.Action, 0);
            Kernel.BindFilter<HandleErrorAttribute>(FilterScope.Action, 1);

            Bind<TimeGoSettings>().ToConstant(_settings).InSingletonScope();

            Bind<IStorageProvider>().To<FileSystemStorageProvider>().InRequestScope()
                .WithConstructorArgument("basePath", x => _settings.UserFileLocation)
                .WithConstructorArgument("baseUrl", x => _settings.SiteUrl);

            Bind<ICache>().To<MemoryCacheManager>().InRequestScope();
            Bind<IHttpContextProvider>().To<HttpContextProvider>().InRequestScope();
            Bind<IHubConnectionContext<dynamic>>().ToMethod(ctx => GlobalHost.ConnectionManager.GetHubContext<CollaborationHub>().Clients);

            Bind<IAuthorizationService>().To<AuthorizationService>().InRequestScope();
            Bind<IEmailService>().To<EmailService>().InRequestScope();
            Bind<IAccountService>().To<AccountService>().InRequestScope();
            Bind<ICompanyService>().To<CompanyService>().InRequestScope();
            Bind<IEmployeeService>().To<EmployeeService>().InRequestScope();
            Bind<ITimeoffService>().To<TimeoffService>().InRequestScope();
            Bind<ITimesheetsService>().To<TimesheetsService>().InRequestScope();
        }
    }
}