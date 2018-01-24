
using System.Web.Http;
using System.Web.Http.Cors;
using TimeGo.ApplicationDomain.Enums;
using TimeGo.ApplicationDomain.Models.Users;
using TimeGo.ApplicationDomain.Services;
using TimeGo.Web.Mvc.Infrastructure.Services;

namespace TimeGo.Web.Mvc.Areas.AppApi.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    [Authorize]
    public class AccountController : BaseApiController
    {
        private readonly IAuthorizationService _authorizationService;
        private readonly IAccountService _accountService;

        public AccountController(IAuthorizationService authorizationService, IAccountService accountService)
        {
            _authorizationService = authorizationService;
            _accountService = accountService;
        }

        [HttpGet]
        [Route("api/isAdmin")]
        public IHttpActionResult Get()
        {
            var user = _authorizationService.GetUser();
            return Success(user.RoleId == 3);
        }

        [HttpPost]
        [Route("api/AddEmployee")]
        public IHttpActionResult AddEmployee(AddEmployeeViewModel model)
        {
            var user = _authorizationService.GetUser();
            if (user.CompanyId == null)
                return Success();
            var result = _accountService.AddEmployee(model, user);
            return result == ErrorCodes.Success ? Success() : Error(result);
        }

        [HttpPost]
        [Route("api/InviteEmployee")]
        public IHttpActionResult InviteEmployee(InviteEmployeeViewModel model)
        {
            var user = _authorizationService.GetUser();
            if (user.CompanyId == null)
                return Success();
            var result = _accountService.InviteEmployee(model, user);
            return result == ErrorCodes.Success ? Success() : Error(result);
        }

        [HttpGet]
        [Route("api/ReInviteEmployee")]
        public IHttpActionResult ReInviteEmployee(long id)
        {
            var user = _authorizationService.GetUser();
            if (user.CompanyId == null)
                return Success();
            var result = _accountService.ReInviteEmployee(id, user);
            return result == ErrorCodes.Success ? Success() : Error(result);
        }

        [HttpPost]
        [Route("api/EditEmployee")]
        public IHttpActionResult EditEmployee(UsersListItemViewModel model)
        {
            var user = _authorizationService.GetUser();
            if (user.CompanyId == null)
                return Success();
            var result = _accountService.EditEmployee(model, user);
            return result == ErrorCodes.Success ? Success() : Error(result);
        }
    }
}