using System.Web.Http;
using System.Web.Http.Cors;
using TimeGo.ApplicationDomain.Models.Timesheets;
using TimeGo.ApplicationDomain.Services;
using TimeGo.Web.Mvc.Infrastructure.Services;
using TimeGo.Web.Mvc.Models;

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

        [HttpPost]
        [Route("api/GetTimesheets")]
        public IHttpActionResult Get(SelectPeriodViewModel model)
        {
            var user = _authorizationService.GetUser();
            if (user.CompanyId == null)
                return Success();
            var result = _timesheetsService.GetTimesheet(user, model.PeriodId, model.UserId);
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

        [HttpGet]
        [Route("api/ApproveTimesheets")]
        public IHttpActionResult Approve(long id)
        {
            var user = _authorizationService.GetUser();
            if (user.CompanyId == null)
                return Success();
            var result = _timesheetsService.Approve(user, id);
            return Success(result);
        }

        [HttpGet]
        [Route("api/UnlockTimesheets")]
        public IHttpActionResult Unlock(long id)
        {
            var user = _authorizationService.GetUser();
            if (user.CompanyId == null)
                return Success();
            var result = _timesheetsService.Unlock(user, id);
            return Success(result);
        }

        [HttpGet]
        [Route("api/SubmitTimesheets")]
        public IHttpActionResult Submit(long id)
        {
            var user = _authorizationService.GetUser();
            if (user.CompanyId == null)
                return Success();
            var result = _timesheetsService.Submit(user, id);
            return Success(result);
        }

        [HttpGet]
        [Route("api/ReSubmitTimesheets")]
        public IHttpActionResult ReSubmit(long id)
        {
            var user = _authorizationService.GetUser();
            if (user.CompanyId == null)
                return Success();
            var result = _timesheetsService.ReSubmit(user, id);
            return Success(result);
        }

        [HttpPost]
        [Route("api/Timesheets")]
        public IHttpActionResult Edit(TimesheetViewModel model)
        {
            var user = _authorizationService.GetUser();
            if (user.CompanyId == null)
                return Success();
            var result = _timesheetsService.EditTimesheet(user, model);
            return Success(result);
        }
    }
}