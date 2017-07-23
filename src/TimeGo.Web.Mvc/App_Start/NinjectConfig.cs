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
using TimeGo.Web.Mvc;
using TimeGo.Web.Mvc.Infrastructure.Dependency;

[assembly: WebActivatorEx.PreApplicationStartMethod(typeof(NinjectConfig), "Start")]
[assembly: WebActivatorEx.ApplicationShutdownMethodAttribute(typeof(NinjectConfig), "Stop")]

namespace TimeGo.Web.Mvc
{
    public static class NinjectConfig 
    {
        private static readonly Bootstrapper Bootstrapper = new Bootstrapper();

        /// <summary>
        /// Starts the application
        /// </summary>
        public static void Start() 
        {
            DynamicModuleUtility.RegisterModule(typeof(OnePerRequestHttpModule));
            DynamicModuleUtility.RegisterModule(typeof(NinjectHttpModule));

            Bootstrapper.Initialize(CreateKernel);
        }
        
        /// <summary>
        /// Stops the application.
        /// </summary>
        public static void Stop()
        {
            Bootstrapper.ShutDown();
        }
        
        /// <summary>
        /// Creates the kernel that will manage your application.
        /// </summary>
        /// <returns>The created kernel.</returns>
        private static IKernel CreateKernel()
        {
            var settings = TimeGoSettings.FromWebConfig(ConfigurationManager.AppSettings);

            var coreModule = new CoreModule(settings);
            var kernel = new StandardKernel(coreModule);

            ComponentContainer.Current = new NinjectComponentContainer(kernel, new[] {
                typeof(Entity<, >).Assembly,
                typeof(TimeGoApplication).Assembly
            });

            var dependencyResolver = new NinjectResolver(kernel);
            GlobalConfiguration.Configuration.DependencyResolver = dependencyResolver;
            //DependencyResolver.SetResolver(dependencyResolver);
            GlobalHost.DependencyResolver = new SignalRNinjectResolver(kernel);

            ControllerBuilder.Current.SetControllerFactory(new NinjectControllerFactory(kernel));

            return kernel;
            //try
            //{
            //    kernel.Bind<Func<IKernel>>().ToMethod(ctx => () => new Bootstrapper().Kernel);
            //    kernel.Bind<IHttpModule>().To<HttpApplicationInitializationHttpModule>();

            //    RegisterServices(kernel);
            //    return kernel;
            //}
            //catch
            //{
            //    kernel.Dispose();
            //    throw;
            //}
        } 
    }
}
