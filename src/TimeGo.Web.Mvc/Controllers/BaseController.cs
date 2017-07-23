using Microsoft.AspNet.Identity;
using System.Web.Mvc;
using TimeGo.ApplicationDomain;
using TimeGo.ApplicationDomain.Dependency;
using TimeGo.ApplicationDomain.Entities;
using TimeGo.ApplicationDomain.Models;
using TimeGo.ApplicationDomain.Services;

namespace TimeGo.Web.Mvc.Controllers
{
    public class BaseController : Controller
    {
        private readonly ICompanyService _companyService;
        private readonly IHttpContextProvider _contextProvider;
        private readonly TimeGoSettings _settings;

        public BaseController()
        {
            _companyService = Get.Component<ICompanyService>();
            _contextProvider = Get.Component<IHttpContextProvider>();
            _settings = Get.Component<TimeGoSettings>();
        }

        public Company Company => _companyService.GetCompanyFromUrl(_contextProvider.GetHttpRequest().RawUrl);

        public ActionResult RedirectToSubDomain(string subdomain, string route = "")
        {
            var url = $"http://{subdomain}.{_settings.SiteUrl}{route}";
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