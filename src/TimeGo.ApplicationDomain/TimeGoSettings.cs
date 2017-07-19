using System;
using System.Collections.Specialized;
using System.Configuration;

namespace TimeGo.ApplicationDomain
{
    public class TimeGoSettings
    {
        public static TimeGoSettings FromWebConfig(NameValueCollection nameValueCollection)
        {
            try
            {
                var connectionString = ConfigurationManager.ConnectionStrings["TimeGoEntities"].ConnectionString;

                var configuration = new TimeGoSettings
                {
                    ConnectionString = connectionString
                };

                return configuration;
            }
            catch (Exception ex)
            {
                throw new ApplicationException("Invalid settings in web.config", ex);
            }
        }

        public static TimeGoSettings FromAppConfig(NameValueCollection nameValueCollection)
        {
            try
            {
                var connectionString = ConfigurationManager.ConnectionStrings["TimeGoEntities"].ConnectionString;

                var configuration = new TimeGoSettings
                {
                    ConnectionString = connectionString
                };

                return configuration;
            }
            catch (Exception ex)
            {
                throw new ApplicationException("Invalid settings in web.config", ex);
            }
        }

        public string ConnectionString { get; set; }
        public string EmailTemplateLocation { get; set; }
    }
}
