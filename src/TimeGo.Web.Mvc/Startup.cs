using Microsoft.Owin;
using Owin;

[assembly: OwinStartup(typeof(TimeGo.Web.Mvc.Startup))]

namespace TimeGo.Web.Mvc
{
    public class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            OwinConfig.Configuration(app);
        }
    }
}
