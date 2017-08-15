using System.Web.Mvc;

namespace TimeGo.Web.Mvc.Areas.AppApi
{
    public class AppApiAreaRegistration : AreaRegistration 
    {
        public override string AreaName => "AppApi";

        public override void RegisterArea(AreaRegistrationContext context) 
        {
            context.Routes.MapMvcAttributeRoutes();
        }
    }
}