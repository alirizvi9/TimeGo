using TimeGo.ApplicationDomain.Mapping;

namespace TimeGo.Web.Mvc
{
    public static class AutoMapperConfig
    {
        public static void RegisterMappings()
        {
            var autoMapperAssemblies = new[] { typeof(TimeGoApplication).Assembly };
            foreach (var autoMapperAssembly in autoMapperAssemblies)
            {
                AutoMapperMapRegistry.RegisterAllMappings(x => x.Include(autoMapperAssembly));
            }
        }
    }
}