using System.Web.Http;
using System.Web.Http.Cors;
using TimeGo.ApplicationDomain.Enums;
using TimeGo.ApplicationDomain.Models;
using TimeGo.ApplicationDomain.Models.Timeoff;
using TimeGo.ApplicationDomain.Services;
using TimeGo.Web.Mvc.Infrastructure.Services;

namespace TimeGo.Web.Mvc.Areas.AppApi.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    [Authorize]
    public class TimeoffController : BaseApiController
    {
        private readonly IAuthorizationService _authorizationService;
        private readonly ITimeoffService _timeoffService;

        public TimeoffController(ITimeoffService timeoffService, IAuthorizationService authorizationService)
        {
            _timeoffService = timeoffService;
            _authorizationService = authorizationService;
        }

        [HttpPost]
        [Route("api/Timeoff")]
        public IHttpActionResult Get(PagingModel model)
        {
            var user = _authorizationService.GetUser();
            if (user.CompanyId == null)
                return Success();
            var result = _timeoffService.GetTimeoffRequestes(user, model);
            return Success(result);
        }

        [HttpPost]
        [Route("api/AddTimeoff")]
        public IHttpActionResult AddTimeoff(AddTimeoffViewModel model)
        {
            var user = _authorizationService.GetUser();
            if (user.CompanyId == null)
                return Success();
            var result = _timeoffService.AddTimeoff(model, user);
            return result == ErrorCodes.Success ? Success() : Error(result);
        }

        [HttpPost]
        [Route("api/ChangeTimeoffStatus")]
        public IHttpActionResult ChangeTimeoffStatus(ChangeStatusViewModel model)
        {
            var result = _timeoffService.ChangeStatus(model.Id, model.Status);
            return result == ErrorCodes.Success ? Success() : Error(result);
        }

    }
}