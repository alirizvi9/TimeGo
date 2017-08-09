using System.Web.Http;

namespace TimeGo.Web.Mvc.Areas.AppApi.Controllers
{
    public class BaseApiController : ApiController
    {
        protected IHttpActionResult Success()
        {
            return Json(new { success = true });
        }

        protected IHttpActionResult Success(object data)
        {
            return Json(data);
        }

        protected IHttpActionResult Error(string message = "", string innerError = "")
        {
            return Json(new { success = false, message, innerError });
        }
    }
}