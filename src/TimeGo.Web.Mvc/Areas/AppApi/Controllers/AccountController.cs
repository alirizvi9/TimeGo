
using System.Web.Http;
using System.Web.Http.Cors;
using TimeGo.Web.Mvc.Infrastructure.Services;

namespace TimeGo.Web.Mvc.Areas.AppApi.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    [Authorize]
    public class AccountController : BaseApiController
    {
        private readonly IAuthorizationService _authorizationService;

        public AccountController(IAuthorizationService authorizationService)
        {
            _authorizationService = authorizationService;
        }

        [HttpGet]
        [Route("api/isAdmin")]
        public IHttpActionResult Get()
        {
            var user = _authorizationService.GetUser();
            return Success(user.RoleId == 3);
        }
    }
}