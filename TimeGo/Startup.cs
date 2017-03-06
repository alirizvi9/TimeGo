using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(TimeGo.Startup))]
namespace TimeGo
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
