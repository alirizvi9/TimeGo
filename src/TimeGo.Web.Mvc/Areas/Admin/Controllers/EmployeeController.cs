using PagedList;
using System.Linq;
using System.Web.Mvc;
using TimeGo.ApplicationDomain.Entities;
using TimeGo.ApplicationDomain.Services;
using TimeGo.Web.Mvc.Areas.Admin.Models;

namespace TimeGo.Web.Mvc.Areas.Admin.Controllers
{
    [AdminAuthorization]
    public class EmployeeController : Controller
    {
        protected IEmployeeService _employeeService;
        protected const int PageSize = 5;

        public EmployeeController(IEmployeeService employeeService)
        {
            _employeeService = employeeService;
        }
        
        public ActionResult Index(int? idEmployee = null, string sortBy = "FirstName", bool ascending = true, int page = 1)
        {
            var model = new TableViewModel<Employee>();
            model.SortBy = sortBy;
            model.IsAscending = ascending;
            var employees = _employeeService.GetPage(model.SortExpression, page, PageSize).ToList();
            model.List = new StaticPagedList<Employee>(employees, page, PageSize, _employeeService.Count());
            return View(model);
        }

        public ActionResult DeleteEmployee(long id)
        {
            _employeeService.DeleteCompany(id);
            return RedirectToAction("Index");
        }
    }
}