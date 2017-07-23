using System.Configuration;
using System.Web.Http;
using System.Web.Mvc;
using Microsoft.AspNet.SignalR;
using Microsoft.Web.Infrastructure.DynamicModuleHelper;
using Ninject;
using Ninject.Web.Common;
using TimeGo.ApplicationDomain;
using TimeGo.ApplicationDomain.Dependency;
using TimeGo.ApplicationDomain.Dependency.Ninject;
using TimeGo.ApplicationDomain.Domain;
using TimeGo.Web.Mvc.Infrastructure.Dependency;

namespace TimeGo.Web.Mvc
{
    public class NinjectConfig
    {
        private static readonly Bootstrapper Bootstrapper = new Bootstrapper();

        public static void ConfigureKernel()
        {
            DynamicModuleUtility.RegisterModule(typeof(OnePerRequestHttpModule));
            DynamicModuleUtility.RegisterModule(typeof(NinjectHttpModule));
            Bootstrapper.Initialize(CreateKernel);

            var kernel = CreateKernel();

            ComponentContainer.Current = new NinjectComponentContainer(kernel, new[] {
                typeof(Entity<, >).Assembly,
                typeof(TimeGoApplication).Assembly
            });

            var dependencyResolver = new NinjectResolver(kernel);
            GlobalConfiguration.Configuration.DependencyResolver = new NinjectResolver(kernel);
            DependencyResolver.SetResolver(dependencyResolver);
            GlobalHost.DependencyResolver = new SignalRNinjectResolver(kernel);

            ControllerBuilder.Current.SetControllerFactory(new NinjectControllerFactory(kernel));
        }

        private static IKernel CreateKernel()
        {
            var settings = TimeGoSettings.FromWebConfig(ConfigurationManager.AppSettings);

            var coreModule = new CoreModule(settings);
            return new StandardKernel(coreModule);
        }
    }
}