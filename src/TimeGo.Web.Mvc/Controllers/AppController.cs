using System.Web.Mvc;

namespace TimeGo.Web.Mvc.Controllers
{
    [AllowAnonymous]
    public class AppController : Controller
    {
        [Route("app")]
        public ActionResult Run()
        {
            ViewBag.Token = Session["token"];
            ViewBag.Role = Session["role"];
            return View();
        }
    }
}
