using System.Web.Mvc;
using TimeGo.ApplicationDomain;
using TimeGo.Web.Mvc.Areas.Admin.Models;

namespace TimeGo.Web.Mvc.Areas.Admin.Controllers
{
    public class AdminLoginController : Controller
    {
        protected readonly TimeGoSettings Settings;

        public AdminLoginController(TimeGoSettings settings)
        {
            Settings = settings;
        }

        // GET: Admin/Login
        public ActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public ActionResult Index(AdminLoginViewModel model)
        {
            if(model.Login == Settings.AdminLogin && model.Password == Settings.AdminPassword)
            {
                Session[AdminAuthorizationAttribute.IS_ADMIN_SESSION_KEY] = true;
                return RedirectToAction("Index", "Company");
            }
            ModelState.AddModelError<AdminLoginViewModel>(x => x.Login, Resource.LoginError);
            return View(model);
        }

        public ActionResult Logout()
        {
            Session[AdminAuthorizationAttribute.IS_ADMIN_SESSION_KEY] = null;
            return RedirectToAction("Index");
        }
    }
}