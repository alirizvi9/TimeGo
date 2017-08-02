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
        protected const int PageSize = 10;

        public CompanyController(ICompanyService companyService, IAccountService accountService)
        {
            _companyService = companyService;
            _accountService = accountService;
        }

        // GET: Admin/Company
        public ActionResult Index(int? idCompany = null, string sortBy = "CompanyName", bool ascending = true, int page = 0)
        {
            var model = new CompanyTableViewModel();
            model.SortBy = sortBy;
            model.IsAscending = ascending;
            var companies = _companyService.GetPage(model.SortExpression, page, PageSize).ToList();
            var editCompany = idCompany!= null ? companies.SingleOrDefault(x=>x.Id == idCompany) : companies.FirstOrDefault();
            model.Companies = companies;
            model.CurrentPage = page;
            model.CountPages = _companyService.Count() / PageSize + 1;
            FillViewBag();

            return View(model);
        }

        public ActionResult EditCompany(long id)
        {
            var editCompany = _companyService.GetCompany(id);
            var model = Mapper.Map<EditCompanyViewModel>(editCompany);
            FillViewBag();
            return PartialView("EditCompany", model);
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
            return PartialView("EditCompany", model);
        }

        public ActionResult DeleteCompany(long id)
        {
            _companyService.DeleteCompany(id);
            return RedirectToAction("Index");
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