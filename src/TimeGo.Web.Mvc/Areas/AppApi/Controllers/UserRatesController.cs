using System.Web.Http;
using System.Web.Http.Cors;
using TimeGo.ApplicationDomain.Enums;
using TimeGo.ApplicationDomain.Models;
using TimeGo.ApplicationDomain.Models.Rates;
using TimeGo.ApplicationDomain.Services;
using TimeGo.Web.Mvc.Infrastructure.Services;

namespace TimeGo.Web.Mvc.Areas.AppApi.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    [Authorize]
    public class UserRatesController : BaseApiController
    {
        private readonly IAuthorizationService _authorizationService;
        private readonly IUserRatesService _ratesService;

        public UserRatesController(IUserRatesService ratesService, IAuthorizationService authorizationService)
        {
            _ratesService = ratesService;
            _authorizationService = authorizationService;
        }

        [HttpPost]
        [Route("api/ratesPage")]
        public IHttpActionResult Get(PagingModel model)
        {
            var user = _authorizationService.GetUser();
            if (user.CompanyId == null)
                return Success();
            var result = _ratesService.GetRates(user, model);
            return Success(result);
        }

        [HttpPost]
        [Route("api/AddRate")]
        public IHttpActionResult AddRate(AddRateViewModel model)
        {
            var user = _authorizationService.GetUser();
            if (user.CompanyId == null)
                return Success();
            var result = _ratesService.AddRate(model, user);
            return result == ErrorCodes.Success ? Success() : Error(result);
        }

        [HttpGet]
        [Route("api/deleteRate")]
        public IHttpActionResult DeleteRate(long id)
        {
            var user = _authorizationService.GetUser();
            if (user.CompanyId == null)
                return Success();
            var result = _ratesService.DeleteRate(id, user);
            return result == ErrorCodes.Success ? Success() : Error(result);
        }
    }
}