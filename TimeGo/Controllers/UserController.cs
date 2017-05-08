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
        [Route("{CompanyURL}/user")]
        public ActionResult Index(String CompanyURL) {
            var Model = new UserViewModel();
            PopulateModel(Model);

            if (Model.LoginId == 0)
                return Expired(CompanyURL);

            Model.Employee = Context.Employees.Where(e => e.EmployeeId == Model.LoginId).FirstOrDefault();

            return View(Model);
        }


        // POST: /Account/Register
        [HttpPost]
        [AllowAnonymous]
        public ActionResult Save(UserViewModel Model) {
            PopulateModel(Model);
            if (Model.LoginId == 0)
                return Expired(Model.CompanyURL);


            var employee = Context.Employees.Where(e => e.EmployeeId == Model.LoginId).FirstOrDefault();
            employee.Phonenumber = Model.Employee.Phonenumber;
            employee.EmailAddress = Model.Employee.EmailAddress;
            employee.Password = Model.Employee.Password;
            employee.LoginMethodId = Model.Employee.LoginMethodId;

            employee.UpdatedById = Model.LoginId;
            employee.UpdatedOn = DateTime.UtcNow;

            Context.Entry(employee).State = System.Data.Entity.EntityState.Modified;
            Context.SaveChanges();

            return RedirectPermanent("/" + Model.CompanyURL+"/User");
        }
    }
}