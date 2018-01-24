using System.Web.Http;
using System.Web.Http.Cors;
using TimeGo.Web.Mvc.Infrastructure.Services;
using AutoMapper;
using TimeGo.ApplicationDomain.Enums;
using TimeGo.ApplicationDomain.Models.CompanyProfile;
using TimeGo.ApplicationDomain.Services;


namespace TimeGo.Web.Mvc.Areas.AppApi.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    [Authorize]
    public class ProfileController : BaseApiController
    {

        private readonly IAuthorizationService _authorizationService;
        private readonly ICompanyService _companyService;

        public ProfileController(IAuthorizationService authorizationService,
            ICompanyService companyService)
        {
            _authorizationService = authorizationService;
            _companyService = companyService;
        }
        
        [HttpGet]
        [Route("api/Profile")]
        public IHttpActionResult Get()
        {
            var user = _authorizationService.GetUser();
            if (user.CompanyId == null)
                return Success();
            var company = _companyService.GetCompany(user.CompanyId.Value);
            var companyModel = Mapper.Map<CompanyProfileViewModel>(company);
            companyModel.FirstName = user.FirstName;
            companyModel.LastName = user.LastName;
            companyModel.PhoneNumber = user.PhoneNumber;
            companyModel.EmailAddress = user.EmailAddress;
            return Success(companyModel);
        }
        
        [HttpGet]
        [Route("api/Profile")]
        public IHttpActionResult Get(int id)
        {
            var company = _companyService.GetCompany(id);
            return Success(company);
        }

        // POST: api/Profile
        [HttpPost]
        [Route("api/Profile")]
        public IHttpActionResult Edit(CompanyProfileViewModel model)
        {
            var user = _authorizationService.GetUser();
            if (user.CompanyId == null)
                return Success();
            var result = _companyService.EditCompany(model, user);
            return result == ErrorCodes.Success ? Success() : Error(result);
        }
    }
}
