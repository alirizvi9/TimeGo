using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using System.Web.Http.Cors;
using AutoMapper;
using TimeGo.ApplicationDomain.Models;
using TimeGo.ApplicationDomain.Models.Users;
using TimeGo.ApplicationDomain.Services;
using TimeGo.Web.Mvc.Infrastructure.Services;

namespace TimeGo.Web.Mvc.Areas.AppApi.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    [System.Web.Http.Authorize]
    public class UsersController : BaseApiController
    {
        private readonly IAuthorizationService _authorizationService;
        private readonly IEmployeeService _employeeService;

        public UsersController(IAuthorizationService authorizationService,
            IEmployeeService employeeService)
        {
            _authorizationService = authorizationService;
            _employeeService = employeeService;
        }

        [HttpPost]
        [Route("api/GetUsers")]
        public IHttpActionResult GetUsersList(PagingModel model)
        {
            var user = _authorizationService.GetUser();
            if (user.CompanyId == null)
                return Success();
            var result = _employeeService.GetPage(user, model.SortExpression, model.Page, model.PageSize);
            return Success(result);
        }
    }
}