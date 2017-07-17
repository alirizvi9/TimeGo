using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(TimeGo.Startup))]
namespace TimeGo
{
    public partial class Startup
    {
        //This is a test
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app); 
        }
    }
}
