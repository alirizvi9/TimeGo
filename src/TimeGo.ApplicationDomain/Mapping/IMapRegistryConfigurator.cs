using System.Reflection;

namespace TimeGo.ApplicationDomain.Mapping
{
    public interface IMapRegistryConfigurator : IHideObjectMethodsFromEditor
    {
        void Include(Assembly assembly);
    }
}