using System;
using System.Linq;
using System.Reflection;

namespace TimeGo.ApplicationDomain.Mapping
{
    public static class AutoMapperMapRegistry
    {
        public static void RegisterAllMappings(Action<IMapRegistryConfigurator> configuration = null)
        {
            var configurator = new MapRegistryConfigurator();
            configuration?.Invoke(configurator);
            var assemblies = configurator.Assemblies.Union(new[] {Assembly.GetExecutingAssembly()}).Distinct();
            var mapperTypes = assemblies.SelectMany(x => x.GetTypes()).Where(IsMapper);

            foreach (var mapperType in mapperTypes)
            {
                var mapper = (IMapper) Activator.CreateInstance(mapperType);
                mapper.Register();
            }
        }

        public static void ResetMappings()
        {
        }

        private static bool IsMapper(Type type)
        {
            return !type.IsAbstract && type.GetInterfaces().Contains(typeof (IMapper));
        }
    }
}