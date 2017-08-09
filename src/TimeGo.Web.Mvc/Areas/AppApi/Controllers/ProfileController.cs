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

        protected IAuthorizationService _authorizationService;
        private readonly ICompanyService _companyService;

        public ProfileController(IAuthorizationService authorizationService,
            ICompanyService companyService)
        {
            _authorizationService = authorizationService;
            _companyService = companyService;
        }

        // GET: api/Profile/
        [HttpGet]
        public IHttpActionResult Get()
        {
            var user = _authorizationService.GetUser();
            if (user.CompanyId == null)
                return Success();
            var company = _companyService.GetCompany(user.CompanyId.Value);
            var commentModel = Mapper.Map<CompanyProfileViewModel>(company);
            return Success(commentModel);
        }

        // GET: api/Profile/5
        [HttpGet]
        public IHttpActionResult Get(int id)
        {
            var company = _companyService.GetCompany(id);
            return Success(company);
        }

        // POST: api/Profile
        [HttpPost]
        public IHttpActionResult Edit(CompanyProfileViewModel model)
        {
            var result = _companyService.EditCompany(model);
            return result == ErrorCodes.Success ? Success() : Error(result.ToString());
        }

        // PUT: api/Profile/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Profile/5
        public void Delete(int id)
        {

        }
    }
}
