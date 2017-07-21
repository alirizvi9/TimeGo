using System.Web.Mvc;

namespace TimeGo.Web.Mvc.Controllers
{
    [AllowAnonymous]
    public class AppController : Controller
    {
        public ActionResult Run()
        {
            return View();
        }
    }
}
