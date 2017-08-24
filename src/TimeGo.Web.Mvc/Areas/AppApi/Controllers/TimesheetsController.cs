using System.Web.Http;
using System.Web.Http.Cors;
using TimeGo.ApplicationDomain.Services;
using TimeGo.Web.Mvc.Infrastructure.Services;

namespace TimeGo.Web.Mvc.Areas.AppApi.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    [Authorize]
    public class TimesheetsController : BaseApiController
    {
        private readonly IAuthorizationService _authorizationService;
        private readonly ITimesheetsService _timesheetsService;

        public TimesheetsController(ITimesheetsService timesheetsService, IAuthorizationService authorizationService)
        {
            _timesheetsService = timesheetsService;
            _authorizationService = authorizationService;
        }

        [HttpGet]
        [Route("api/Timesheets")]
        public IHttpActionResult Get(long periodId)
        {
            var user = _authorizationService.GetUser();
            if (user.CompanyId == null)
                return Success();
            var result = _timesheetsService.GetTimesheet (user, periodId);
            return Success(result);
        }

        [HttpGet]
        [Route("api/periods")]
        public IHttpActionResult GetPeriods()
        {
            var user = _authorizationService.GetUser();
            if (user.CompanyId == null)
                return Success();
            var result = _timesheetsService.GetPeriods(user);
            return Success(result);
        }

        [HttpGet]
        [Route("api/tasks")]
        public IHttpActionResult GetTasks()
        {
            var user = _authorizationService.GetUser();
            if (user.CompanyId == null)
                return Success();
            var result = _timesheetsService.GetTasks(user);
            return Success(result);
        }
    }
}