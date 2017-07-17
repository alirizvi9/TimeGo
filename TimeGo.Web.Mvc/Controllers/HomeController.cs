using System.Web.Mvc;

namespace TimeGo.Web.Mvc.Controllers
{
    [AllowAnonymous]
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View("NgApp");
        }
    }
}
