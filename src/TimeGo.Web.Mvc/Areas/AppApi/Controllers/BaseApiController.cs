using System.Web.Http;
using TimeGo.ApplicationDomain.Enums;

namespace TimeGo.Web.Mvc.Areas.AppApi.Controllers
{
    public class BaseApiController : ApiController
    {
        protected IHttpActionResult Success()
        {
            return Json(new { IsSuccess = true });
        }

        protected IHttpActionResult Success(object data)
        {
            return Json(data);
        }

        protected IHttpActionResult Error(ErrorCodes errorCode, string message = "", string innerError = "")
        {
            return Json(new
            {
                IsSuccess = false,
                Message = message,
                InnerError = innerError,
                ErrorCodes = errorCode
            });
        }
    }
}