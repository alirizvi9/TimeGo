using System.Collections.Generic;
using System.Reflection;

namespace TimeGo.ApplicationDomain.Mapping
{
    public class MapRegistryConfigurator : IMapRegistryConfigurator
    {
        private readonly List<Assembly> _assemblies = new List<Assembly>();

        public IEnumerable<Assembly> Assemblies => _assemblies;

        void IMapRegistryConfigurator.Include(Assembly assembly)
        {
            _assemblies.Add(assembly);
        }
    }
}