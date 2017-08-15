using System;
using System.Web;
using System.Web.Mvc;

namespace TimeGo.Web.Mvc.Areas.Admin
{
    public class AdminAuthorizationAttribute : AuthorizeAttribute
    {
        public const string IS_ADMIN_SESSION_KEY = "IsAdmin";

        protected override bool AuthorizeCore(HttpContextBase httpContext)
        {
            if (httpContext == null)
            {
                throw new ArgumentNullException("httpContext");
            }

            if (httpContext.Session == null)
            {
                throw new NullReferenceException("httpContext.Session");
            }

            object objIsAdmin = httpContext.Session[IS_ADMIN_SESSION_KEY];
            if (objIsAdmin == null)
            {
                return false;
            }

            return (bool)objIsAdmin;
        }

        protected override void HandleUnauthorizedRequest(AuthorizationContext filterContext)
        {
            const string loginUrl = "~/root/AdminLogin";

            filterContext.Result = new RedirectResult(loginUrl + "?returnUrl=" + filterContext.HttpContext.Request.Url.PathAndQuery);
        }
    }
}