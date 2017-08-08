using System.Web.Http;
using System.Web.Http.Cors;
using TimeGo.Web.Mvc.Infrastructure.Services;
using AutoMapper;
using TimeGo.ApplicationDomain.Services;
using TimeGo.Web.Mvc.Areas.AppApi.Models;


namespace TimeGo.Web.Mvc.Areas.AppApi.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
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

        [Authorize]
        public IHttpActionResult Get()
        {
            var user = _authorizationService.GetUser();
            if (user.CompanyId == null)
                return Success();
            var company = _companyService.GetCompany(user.CompanyId.Value); 
            var commentModel = Mapper.Map<CompanyProfileViewModel>(company);
            return Success(commentModel);
        }

        [Authorize]
        public IHttpActionResult Get(int id)
        {
            var company = _companyService.GetCompany(id);
            return Success(company);
        }

        [Authorize]
        public void Post([FromBody]string value)
        {
        }

        [Authorize]
        public void Put(int id, [FromBody]string value)
        {
        }

        [Authorize]
        public void Delete(int id)
        {

        }
    }
}
