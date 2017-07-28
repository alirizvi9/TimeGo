using AutoMapper;
using System.Linq;
using System.Web.Mvc;
using TimeGo.ApplicationDomain.Entities;
using TimeGo.ApplicationDomain.Services;
using TimeGo.Web.Mvc.Areas.Admin.Models;

namespace TimeGo.Web.Mvc.Areas.Admin.Controllers
{
    [AdminAuthorization]
    public class CompanyController : Controller
    {
        protected ICompanyService _companyService;
        protected IAccountService _accountService;

        public CompanyController(ICompanyService companyService, IAccountService accountService)
        {
            _companyService = companyService;
            _accountService = accountService;
        }

        // GET: Admin/Company
        public ActionResult Index(int? idCompany = null, string sortBy = "CompanyName", bool ascending = true)
        {
            var model = new CompanyTableViewModel();
            model.SortBy = sortBy;
            model.IsAscending = ascending;
            var companies = _companyService.GetAll(model.SortExpression, 0, 10).ToList();
            var editCompany = idCompany!= null ? companies.SingleOrDefault(x=>x.Id == idCompany) : companies.FirstOrDefault();
            model.Companies = companies;
            model.SelectedCompany = Mapper.Map<EditCompanyViewModel>(editCompany);

            FillViewBag();

            return View(model);
        }

        [HttpPost]
        public ActionResult Index(CompanyTableViewModel model)
        {
            if(ModelState.IsValid)
            {
               var error = _companyService.EditCompany(Mapper.Map<Company>(model.SelectedCompany));
            }
            FillViewBag();
            return View(model);
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