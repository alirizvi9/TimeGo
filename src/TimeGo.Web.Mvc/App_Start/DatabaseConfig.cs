using TimeGo.ApplicationDomain.DbInitialization;

namespace TimeGo.Web.Mvc
{
    public static class DatabaseConfig
    {
        public static void Initialize()
        {
            DataCreator.FillDatabaseWithData();
        }
    }
}