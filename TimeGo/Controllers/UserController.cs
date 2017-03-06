using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using TimeGo.Models;

namespace TimeGo.Controllers
{
    public class UserController : BaseController {
        // GET: Employee
        [Route("{CompanyId}/user")]
        public ActionResult Index(String CompanyId) {
            if(Session["LoginId"]==null)
                return RedirectPermanent(@"\");

            var Model = new UserViewModel();
            PopulateModel(Model);
            Model.Employee = Context.Employees.Where(e => e.EmployeeId == Model.LoginId).FirstOrDefault();

            return View(Model);
        }


        // POST: /Account/Register
        [HttpPost]
        [AllowAnonymous]
        public ActionResult Save(UserViewModel model) {
            PopulateModel(model);

            var employee = Context.Employees.Where(e => e.EmployeeId == model.LoginId).FirstOrDefault();
            employee.Phonenumber = model.Employee.Phonenumber;
            employee.EmailAddress = model.Employee.EmailAddress;
            employee.Password = model.Employee.Password;
            employee.LoginMethodId = model.Employee.LoginMethodId;

            employee.UpdatedById = model.LoginId;
            employee.UpdatedOn = DateTime.UtcNow;

            Context.Entry(employee).State = System.Data.Entity.EntityState.Modified;
            Context.SaveChanges();

            return RedirectPermanent("/" +model.CompanyURL+"/User");
        }
    }
}