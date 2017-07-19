using Microsoft.Owin.Security.OAuth;
using Owin;
using System;

namespace TimeGo.Web.Mvc
{
    public class OwinConfig
    {
        public static OAuthAuthorizationServerOptions OAuthOptions;

        public static void Configuration(IAppBuilder app)
        {
            OAuth(app);
        }

        public static void OAuth(IAppBuilder app)
        {
            OAuthOptions = new OAuthAuthorizationServerOptions
            {
                AllowInsecureHttp = true,
                AccessTokenExpireTimeSpan = TimeSpan.FromDays(14)
            };

            app.UseOAuthBearerTokens(OAuthOptions);
        }
    }
}