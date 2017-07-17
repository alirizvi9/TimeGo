using System;

namespace TimeGo.ApplicationDomain.Dependency
{
    public interface IComponentContainer
    {
        T Get<T>() where T : class;
        object Get(Type serviceType);
    }
}