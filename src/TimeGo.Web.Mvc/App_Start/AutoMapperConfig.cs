using TimeGo.ApplicationDomain.Mapping;

namespace TimeGo.Web.Mvc
{
    public static class AutoMapperConfig
    {
        public static void RegisterMappings()
        {
            AutoMapperMapRegistry.RegisterAllMappings();
        }
    }
}