using System;
using Autofac;

namespace TimeGo.ApplicationDomain.Dependency.Autofac
{
    public class AutofacComponentContainer : IComponentContainer
    {
        private readonly IContainer _container;

        public AutofacComponentContainer(IContainer container)
        {
            _container = container;
        }

        public T Get<T>() where T : class
        {
            return _container.Resolve<T>();
        }

        public object Get(Type serviceType)
        {
            return _container.Resolve(serviceType);
        }
    }
}
