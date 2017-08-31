using AutoMapper;
using PagedList;
using System.Linq;
using System.Web.Mvc;
using TimeGo.ApplicationDomain.Entities;
using TimeGo.ApplicationDomain.Services;
using TimeGo.Web.Mvc.Areas.Admin.Models;
using TimeGo.Web.Mvc.Controllers;
using TimeGo.Web.Mvc.Infrastructure.Services;

namespace TimeGo.Web.Mvc.Areas.Admin.Controllers
{
    [AdminAuthorization]
    public class CompanyController : BaseController
    {
        protected ICompanyService _companyService;
        protected IAccountService _accountService;
        protected IAuthorizationService _authorizationService;
        protected const int PageSize = 5;

        public CompanyController(ICompanyService companyService, IAccountService accountService, IAuthorizationService authorizationService)
        {
            _companyService = companyService;
            _accountService = accountService;
            _authorizationService = authorizationService;
        }

        // GET: Admin/Company
        public ActionResult Index(int? idCompany = null, string sortBy = "CompanyName", bool ascending = true, int page = 1)
        {
            var model = new TableViewModel<Company>();
            model.SortBy = sortBy;
            model.IsAscending = ascending;
            var companies = _companyService.GetPage(model.SortExpression, page, PageSize).ToList();
            model.List = new StaticPagedList<Company>(companies, page, PageSize, _companyService.Count());
            return View(model);
        }

        public ActionResult EditCompany(long id)
        {
            var editCompany = _companyService.GetCompany(id);
            var model = Mapper.Map<EditCompanyViewModel>(editCompany);
            FillViewBag();
            return View(model);
        }

        [HttpPost]
        public ActionResult EditCompany(EditCompanyViewModel model)
        {
            if (ModelState.IsValid)
            {
                var error = _companyService.EditCompany(Mapper.Map<Company>(model));
                return RedirectToAction("Index");
            }
            FillViewBag();
            return View(model);
        }

        [HttpPost]
        public ActionResult EditBillingAddress(EditCompanyViewModel model)
        {
            var error = _companyService.EditBillingAddress(Mapper.Map<Company>(model));
            return RedirectToAction("Index");
        }

        public ActionResult DeleteCompany(long id)
        {
            _companyService.DeleteCompany(id);
            return RedirectToAction("Index");
        }

        public ActionResult RedirectToCompany(long id)
        {
            var company = _companyService.GetCompany(id);
            var emploee = _companyService.GetCompanyAdmin(id);
            if(company == null || emploee == null)
                return RedirectToAction("Index");
            var tokenModel = _authorizationService.Authorization(emploee.EmailAddress, emploee.Password, company.Id);
            return RedirectToSubDomain(company.TimeGoUrl, string.Format("set?token={0}&role={1}", tokenModel.Token, tokenModel.Employee.Role.RoleType));
        }

        [AllowAnonymous]
        [Route("set")]
        public ActionResult SetSession(string token, string role)
        {
            Session["token"] = token;
            Session["role"] = role;
            return RedirectToAction("Run", "App");
        }

        private void FillViewBag()
        {
            ViewBag.Timezones = _accountService
                .GetTimeZones()
                .ToSelectList(x => x.Id, x => x.TimezoneName);
            ViewBag.SubscriptionPlans = _accountService
                .GetSubscriptionPlans()
                .ToSelectList(x => x.Id, x => x.SubscriptionPlanType);
            ViewBag.CompanyApproveds = _accountService
                .GetCompanyApproves()
                .ToSelectList(x => x.Id, x => x.CompanyApprovedType);
        }
    }
}