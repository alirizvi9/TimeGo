using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using Ninject;
using TimeGo.ApplicationDomain.Dependency;
using TimeGo.ApplicationDomain.Dependency.Ninject;
using TimeGo.ApplicationDomain.Mapping;
using TimeGo.ApplicationDomain.Persistance;
using TimeGo.Tests.Base.Database;

namespace TimeGo.Tests.Base.Controllers
{
    public abstract class BaseDatabaseOrientedTest : IDisposable
    {
        protected IDbSetUp DbSetUp;
        protected IKernel Kernel;

        #region Abstract methods
        protected abstract NinjectComponentContainer CreateNinjectComponentContainer();
        protected abstract IEnumerable<Assembly> GetAutoMapperMaggingsAssemblies();
        protected abstract IDbSetUp GetDbSetup();
        #endregion

        protected BaseDatabaseOrientedTest()
        {
            AutoMapperInitialize();

            ComponentContainer.Current = CreateNinjectComponentContainer();

            DatabaseInitialize();
        }

        public void Dispose()
        {
            DbSetUp.TearDown();
        }

        #region Private methods
        private void DatabaseInitialize()
        {
            DbSetUp = GetDbSetup();

            DbSetUp.SetUp();
        }

        private void AutoMapperInitialize()
        {
            var autoMapperMappingAssemblies = GetAutoMapperMaggingsAssemblies();
            foreach (var autoMapperMappingAssembly in autoMapperMappingAssemblies)
            {
                var assembly = autoMapperMappingAssembly;
                AutoMapperMapRegistry.RegisterAllMappings(conf => conf.Include(assembly));
            }
        }
        #endregion

        #region Protected methods
        /// <summary>
        /// Register Mock for servicea
        /// </summary>
        /// <typeparam name="TService">Type of the service</typeparam>
        /// <param name="obj">Mock instance</param>
        protected void MockService<TService>(TService obj)
        {
            Kernel.Rebind<TService>().ToConstant(obj);
        }

        /// <summary>
        /// Ins the unit of work.
        /// </summary>
        /// <param name="action">The action.</param>
        protected void InUnitOfWork(Action action)
        {
            using (var uow = Get.Component<IUnitOfWorkProvider>().BeginUnitOfWork())
            {
                action();
                uow.Success();
            }
        }

        /// <summary>
        /// Ins the failing unit of work.
        /// </summary>
        /// <param name="action">The action.</param>
        protected void InFailingUnitOfWork(Action action)
        {
            using (var uow = Get.Component<IUnitOfWorkProvider>().BeginUnitOfWork())
            {
                action();
                throw new Exception("Some simulated commit exception");
            }
        }

        /// <summary>
        /// 
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <returns></returns>
        protected T GetService<T>() where T : class
        {
            return Kernel.Get<T>();
        }

        /// <summary>
        /// Finds the specified id.
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="id">The id.</param>
        /// <returns></returns>
        protected T Find<T>(object id) where T : class, IIdentifiable
        {
            return Kernel.Get<IRepository>().Find<T>(id);
        }

        /// <summary>
        /// Finds this instance.
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <returns></returns>
        protected IQueryable<T> Find<T>() where T : class, IIdentifiable
        {
            return Kernel.Get<IRepository>().Find<T>();
        }

        protected T FindForUpdate<T>(object id) where T : class, IIdentifiable
        {
            return Kernel.Get<IRepository>().FindForUpdate<T>(id);
        }

        /// <summary>
        /// Deletes the specified item.
        /// </summary>
        /// <typeparam name="T"></typeparam>
        protected void Delete<T>(T obj) where T : class, IIdentifiable
        {
            var repository = Kernel.Get<IRepository>();
            repository.Delete(obj);
            repository.Save();
        }
        #endregion
    }
}