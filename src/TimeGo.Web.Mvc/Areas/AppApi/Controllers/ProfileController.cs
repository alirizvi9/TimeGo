using System.Collections.Generic;
using System.Web.Http;
using TimeGo.Web.Mvc.Infrastructure.Services;
using System.Web.Http.Description;
using AutoMapper;
using TimeGo.ApplicationDomain.Entities;
using TimeGo.ApplicationDomain.Services;
using TimeGo.ApplicationDomain.Web.ActionResults;
using TimeGo.Web.Mvc.Areas.AppApi.Models;


namespace TimeGo.Web.Mvc.Areas.AppApi.Controllers
{
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


        public IHttpActionResult Get(int id)
        {
            var company = _companyService.GetCompany(id);
            return Success(company);
        }

        // POST: api/Profile
        public void Post([FromBody]string value)
        {
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
