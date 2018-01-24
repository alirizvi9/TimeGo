using System.Web.Http;
using System.Web.Http.Cors;
using TimeGo.ApplicationDomain.Enums;
using TimeGo.ApplicationDomain.Models;
using TimeGo.ApplicationDomain.Models.Period;
using TimeGo.ApplicationDomain.Models.Timeoff;
using TimeGo.ApplicationDomain.Services;
using TimeGo.Web.Mvc.Infrastructure.Services;

namespace TimeGo.Web.Mvc.Areas.AppApi.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    [Authorize]
    public class PeriodController : BaseApiController
    {
        private readonly IAuthorizationService _authorizationService;
        private readonly IPeriodService _periodService;

        public PeriodController(IPeriodService timeoffService, IAuthorizationService authorizationService)
        {
            _periodService = timeoffService;
            _authorizationService = authorizationService;
        }

        [HttpPost]
        [Route("api/periodPage")]
        public IHttpActionResult Get(PagingModel model)
        {
            var user = _authorizationService.GetUser();
            if (user.CompanyId == null)
                return Success();
            var result = _periodService.GetPeriods(user, model);
            return Success(result);
        }

        [HttpPost]
        [Route("api/AddPeriod")]
        public IHttpActionResult AddPeriod(AddPeriodViewModel model)
        {
            var user = _authorizationService.GetUser();
            if (user.CompanyId == null)
                return Success();
            var result = _periodService.AddPeriod(model, user);
            return result == ErrorCodes.Success ? Success() : Error(result);
        }

        [HttpPost]
        [Route("api/EditPeriod")]
        public IHttpActionResult EditPeriod(PeriodViewModel model)
        {
            var user = _authorizationService.GetUser();
            if (user.CompanyId == null)
                return Success();
            var result = _periodService.EditPeriod(model, user);
            return result == ErrorCodes.Success ? Success() : Error(result);
        }

        [HttpPost]
        [Route("api/ChangePeriodStatus")]
        public IHttpActionResult ChangePeriodStatus(ChangeStatusViewModel model)
        {
            var user = _authorizationService.GetUser();
            if (user.CompanyId == null)
                return Success();
            var result = _periodService.ChangeStatus(user, model.Id, model.Status);
            return result == ErrorCodes.Success ? Success() : Error(result);
        }

        [HttpGet]
        [Route("api/deletePeriod")]
        public IHttpActionResult DeletePeriod(long id)
        {
            var user = _authorizationService.GetUser();
            if (user.CompanyId == null)
                return Success();

            var result = _periodService.Delete(user, id);
            return result == ErrorCodes.Success ? Success() : Error(result);
        }
    }
}