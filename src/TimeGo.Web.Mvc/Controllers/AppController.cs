using System.Web.Mvc;

namespace TimeGo.Web.Mvc.Controllers
{
    [AllowAnonymous]
    public class AppController : Controller
    {
        [Route("app")]
        public ActionResult Run()
        {
            ViewBag.Token = TempData["authorizationToken"];
            return View();
        }
    }
}
