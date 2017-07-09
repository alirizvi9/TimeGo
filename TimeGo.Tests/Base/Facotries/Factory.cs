using System;
using TimeGo.ApplicationDomain.Dependency;

namespace TimeGo.Tests.Base.Facotries
{
    public static class Factory
    {
        public static T Create<T>(Action<T> initialization = null)
        {
            return Get.Component<IFactory<T>>().Create(initialization ?? (x => { }));
        }

        public static T Build<T>(Action<T> initialization = null)
        {
            return Get.Component<IFactory<T>>().Build(initialization ?? (x => { }));
        }
    }
}
