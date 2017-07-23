using System;
using System.Collections.Generic;

namespace TimeGo.ApplicationDomain.Dependency
{
    public interface IComponentContainer
    {
        T Get<T>() where T : class;
        object Get(Type serviceType);
        IEnumerable<object> GetAll(Type serviceType);
        IEnumerable<T> GetAll<T>();
        void WireUp(object obj);
    }
}