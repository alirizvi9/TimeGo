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
                    ConnectionString = connectionString,
                    SiteUrl = $"http://{ConfigurationManager.AppSettings["SiteUrl"]}",
                    SieUrlForSubdomen = $"http://{{0}}.{ConfigurationManager.AppSettings["SiteUrl"]}",
                    UserFileLocation = ConfigurationManager.AppSettings["UserFileLocation"],
                    EmailTemplateLocation = ConfigurationManager.AppSettings["EmailTemplateLocation"],
                    EmailFrom = ConfigurationManager.AppSettings["EmailFrom"],
                    EmailFromName = ConfigurationManager.AppSettings["EmailFromName"]
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
        public string SiteUrl { get; set; }
        public string SieUrlForSubdomen { get; set; }
        public string UserFileLocation { get; set; }
        public string EmailTemplateLocation { get; set; }
        public string EmailFrom { get; set; }
        public string EmailFromName { get; set; }
    }
}
