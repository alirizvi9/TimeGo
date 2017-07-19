using Microsoft.AspNet.Identity;
using System.Web.Mvc;
using TimeGo.ApplicationDomain;
using TimeGo.ApplicationDomain.Models.ViewModels;
using TimeGo.Data;

namespace TimeGo.Web.Mvc.Controllers
{
    public class BaseController : Controller
    {
        protected ICompanyService _companyService;

        public BaseController(ICompanyService companyService)
        {
            _companyService = companyService;
        }

        public Company Company
        {
            get
            {
                var url = Url.RequestContext.HttpContext.Request.Url.AbsoluteUri;
                return _companyService.GetCompanyFromUrl(url);
            }
        }

        public ActionResult RedirectToSubDomain(string subdomain, string route = "")
        {
            var urlSite = "localhost:51816/";
            var url = string.Format("http://{0}.{1}{2}", subdomain, urlSite, route);
            return Redirect(url);
        }

        protected void AddErrors(IdentityResult result)
        {
            foreach (var error in result.Errors)
            {
                ModelState.AddModelError("", error);
            }
        }

        protected void AddError(ViewError error)
        {
            ModelState.AddModelError(error.Name, error.Message);
        }
    }
}