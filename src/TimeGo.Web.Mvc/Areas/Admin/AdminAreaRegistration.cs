using System.Web.Mvc;

namespace TimeGo.Web.Mvc.Areas.Admin
{
    public class AdminAreaRegistration : AreaRegistration 
    {
        public override string AreaName => "Admin";

        public override void RegisterArea(AreaRegistrationContext context) 
        {
            context.Routes.LowercaseUrls = true;
            context.MapRoute(
                "Admin_default",
                "root/{controller}/{action}/{id}",
                new { controller = "Company", action = "Index", id = UrlParameter.Optional },
                new[] { "TimeGo.Web.Mvc.Areas.Admin.Controllers" }
            );
        }
    }
}