using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using TimeGo.Models;

namespace TimeGo.Controllers
{
    public class AdminController : BaseController {
        // GET: Employee
        [Route("{CompanyURL}/admin")]
        public ActionResult Index(String CompanyURL) {
            AdminViewModel Model = new AdminViewModel();
            PopulateModel(Model);
            if (Model.LoginId == 0)
                return Expired(CompanyURL);


            Data.Company Company = Context.Companies.Where(c => c.CompanyId == Model.CompanyId).FirstOrDefault();
            Model.CompanyName = Company.CompanyName;
            Model.ContactName = Company.ContactName;
            Model.PhoneNumber = Company.PhoneNumber;
            Model.Email = Company.EmailAddress;
            Model.CompanyURL = Company.TimeGoURL;
            Model.VacationApproverEmail = Company.VacationApproverEmail;

            Model.NumberOfTimeoffRequests = Context.TimeoffRequests.Count(tor => tor.ApprovalStatusId == 10 && tor.CompanyId == Model.CompanyId);

            return View(Model);
        }


        [HttpPost]
        [Route("{CompanyURL}/admin")]
        public ActionResult Index(String CompanyURL, AdminViewModel Model) {
            BaseViewModel PriorModel = new BaseViewModel();
            PopulateModel(PriorModel);

            if (!ModelState.IsValid)
                return View(Model);

            Data.Company Company = Context.Companies.Where(c => c.TimeGoURL == PriorModel.CompanyURL).FirstOrDefault();
            Company.CompanyName = Model.CompanyName;
            Company.ContactName = Model.ContactName;
            Company.PhoneNumber = Model.PhoneNumber;
            Company.EmailAddress = Model.Email;
            Company.TimeGoURL = Model.CompanyURL;
            Company.VacationApproverEmail = Model.VacationApproverEmail;
            Company.UpdatedById = Model.LoginId;
            Company.UpdatedOn = DateTime.UtcNow;

            Session["CompanyURL"] = Model.CompanyURL;

            Context.Entry(Company).State = System.Data.Entity.EntityState.Modified;
            Context.SaveChanges();

            return RedirectPermanent("/" + Company.TimeGoURL + "/admin");
        }



        // POST: /Account/Register
        [HttpPost]
        [AllowAnonymous]
        public ActionResult Save(UserViewModel model) {
            PopulateModel(model);
            if (!ModelState.IsValid)
                return View(model);


            var employee = Context.Employees.Where(e => e.EmployeeId == model.LoginId).FirstOrDefault();
            employee.Phonenumber = model.Employee.Phonenumber;
            employee.EmailAddress = model.Employee.EmailAddress;
            employee.Password = model.Employee.Password;

            employee.UpdatedById = model.LoginId;
            employee.UpdatedOn = DateTime.UtcNow;

            Context.Entry(employee).State = System.Data.Entity.EntityState.Modified;
            Context.SaveChanges();

            return RedirectPermanent("/" + model.CompanyURL + "/User");
        }

        [Route("{CompanyURL}/admincodes")]
        public ActionResult AdminCodes(String CompanyURL, int? TaskId) {
            var Model = new AdminCodesViewModel();
            PopulateModel(Model);
            if (!ModelState.IsValid)
                return View(Model);


            Model.Tasks = Context.Tasks.Where(t => t.CompanyId == Model.CompanyId).ToList();

            Model.Employees = new List<SelectListItem>();
            Model.Employees.Add(new SelectListItem() { Text = "", Value = "0" });
            foreach (var Employee in Context.Employees.Where(e => e.IsActive && e.CompanyId == Model.CompanyId && e.RoleId != 0).OrderBy(e => e.LastName)) {
                SelectListItem selectList = new SelectListItem() {
                    Text = Employee.LastName + ", " + Employee.FirstName,
                    Value = Employee.EmployeeId.ToString()
                };
                Model.Employees.Add(selectList);
            }

            if (TaskId == null) {
                Model.SelectedTask = new Data.Task() { Approver1Id = 0, Approver2Id = 0 };
            } else {
                Model.SelectedTask = Context.Tasks.Where(t => t.TaskId == TaskId).FirstOrDefault();
                if (Model.SelectedTask.Approver1Id == null) Model.SelectedTask.Approver1Id = 0;
                if (Model.SelectedTask.Approver2Id == null) Model.SelectedTask.Approver2Id = 0;
            }

            return View(Model);
        }

        [HttpPost]
        [Route("{CompanyURL}/admincodes")]
        public ActionResult AdminCodes(String CompanyURL, AdminCodesViewModel Model) {
            PopulateModel(Model);
            if (!ModelState.IsValid)
                return View(Model);


            Model.Employees = new List<SelectListItem>();
            Model.Employees.Add(new SelectListItem() { Text = "", Value = "0" });
            foreach (var Employee in Context.Employees.Where(e => e.IsActive && e.CompanyId == Model.CompanyId && e.RoleId != 0).OrderBy(e => e.LastName)) {
                SelectListItem selectList = new SelectListItem() {
                    Text = Employee.LastName + ", " + Employee.FirstName,
                    Value = Employee.EmployeeId.ToString()
                };
                Model.Employees.Add(selectList);
            }



            var Task = new Data.Task();
            Task.TaskId = Model.SelectedTask.TaskId;
            Task.CompanyId = Model.CompanyId;
            Task.TaskName = Model.SelectedTask.TaskName;
            Task.Approver1Id = Model.SelectedTask.Approver1Id;
            Task.Approver2Id = Model.SelectedTask.Approver2Id;
            Task.IsActive = Model.SelectedTask.IsActive;

            Task.UpdatedById = Model.LoginId;
            Task.UpdatedOn = DateTime.UtcNow;

            Context.Entry(Task).State = Model.SelectedTask.TaskId == 0 ? System.Data.Entity.EntityState.Added : System.Data.Entity.EntityState.Modified;
            Context.SaveChanges();

            return RedirectPermanent("/" + CompanyURL + "/admincodes");
        }



        [Route("{CompanyURL}/adminallowedcodes")]
        public ActionResult AdminAllowedCodes(String CompanyURL, int? SelectedEmployeeId) {
            var Model = new AdminAllowedCodesViewModel();
            PopulateModel(Model);
            if (!ModelState.IsValid)
                return View(Model);

            if (SelectedEmployeeId != null)
                Model.EmployeeId = (int)SelectedEmployeeId;


            Model.Employees = new List<SelectListItem>();
            foreach (var Employee in Context.Employees.Where(e => e.IsActive && e.CompanyId == Model.CompanyId).OrderBy(e => e.LastName)) {
                if (Model.EmployeeId == 0)
                    Model.EmployeeId = Employee.EmployeeId;

                SelectListItem selectList = new SelectListItem() {
                    Text = Employee.LastName + ", " + Employee.FirstName,
                    Value = Employee.EmployeeId.ToString()
                };
                Model.Employees.Add(selectList);
            }


            Model.Tasks = new List<SelectListItem>();
            var TaskAlloweds = Context.TaskAlloweds.Where(t => t.EmployeeId == Model.EmployeeId && t.IsActive == true).ToList();
            foreach (var Task in Context.Tasks.Where(t => t.IsActive == 1 && t.CompanyId == Model.CompanyId).OrderBy(e => e.TaskName)) {
                var IsSelected = TaskAlloweds.Any(ta => ta.TaskId == Task.TaskId);

                SelectListItem selectList = new SelectListItem() {
                    Text = Task.TaskName,
                    Value = Task.TaskId.ToString(),
                    Selected = IsSelected
                };

                Model.Tasks.Add(selectList);
            }

            return View(Model);
        }




        [HttpPost]
        [Route("{CompanyURL}/adminallowedcodes")]
        public ActionResult AdminAllowedCodes(String CompanyURL, AdminAllowedCodesViewModel Model) {
            PopulateModel(Model);
            if (!ModelState.IsValid)
                return View(Model);

            var ids = Request["SelectedTasks"] == null ? new List<String>() : Request["SelectedTasks"].Split(',').ToList();
            var TaskAlloweds = Context.TaskAlloweds.Where(t => t.EmployeeId == Model.EmployeeId).ToList();

            foreach (var TaskAllowed in TaskAlloweds) {
                if (ids.Any(i => i == TaskAllowed.TaskId.ToString())) {
                    if (TaskAllowed.IsActive != true) {
                        TaskAllowed.IsActive = true;
                        Context.Entry(TaskAllowed).State = System.Data.Entity.EntityState.Modified;
                    }

                    //In both - set active - update
                } else {
                    if (TaskAllowed.IsActive != false) {
                        TaskAllowed.IsActive = false;
                        Context.Entry(TaskAllowed).State = System.Data.Entity.EntityState.Modified;
                    }

                    //in db, not in list, set inactice - update
                }
            };

            foreach (var id in ids) {
                if (!TaskAlloweds.Any(t => t.TaskId.ToString() == id)) {
                    var TaskAllowed = new Data.TaskAllowed();
                    TaskAllowed.EmployeeId = Model.EmployeeId;
                    TaskAllowed.TaskId = int.Parse(id);
                    TaskAllowed.IsActive = true;
                    Context.Entry(TaskAllowed).State = System.Data.Entity.EntityState.Added;
                }
            };
            Context.SaveChanges();

            return RedirectPermanent("/" + CompanyURL + "/adminallowedcodes");
        }



        [Route("{CompanyURL}/adminusers")]
        public ActionResult AdminUsers(String CompanyURL, int? EmployeeId) {
            var Model = new AdminUsersViewModel();
            PopulateModel(Model);
            if (!ModelState.IsValid)
                return View(Model);

            Model.Employees = Context.Employees.Where(t => t.CompanyId == Model.CompanyId).ToList();

            Model.Roles = new List<SelectListItem>();
            foreach (var Role in Context.Roles) {
                SelectListItem selectList = new SelectListItem() {
                    Text = Role.RoleType,
                    Value = Role.RoleId.ToString()
                };
                Model.Roles.Add(selectList);
            }


            if (EmployeeId == null) {
                Model.SelectedEmployee = new Data.Employee();
                Model.SelectedEmployee.RoleId = 0;
                Model.SelectedEmployee.IsActive = true;
                Model.SelectedEmployee.IsOvertimeCalculated = true;
                Model.SelectedEmployee.IsAdmin = false;
            } else {
                Model.SelectedEmployee = Context.Employees.Where(t => t.EmployeeId == EmployeeId).FirstOrDefault();
                if (Model.SelectedEmployee.RoleId == null) Model.SelectedEmployee.RoleId = 0;
            }

            return View(Model);
        }


        [HttpPost]
        [Route("{CompanyURL}/adminusers")]
        public ActionResult AdminUsers(String CompanyURL, AdminUsersViewModel Model) {
            PopulateModel(Model);
            if (!ModelState.IsValid)
                return View(Model);

            if (!ModelState.IsValid) {
                Model.Employees = Context.Employees.Where(t => t.CompanyId == Model.CompanyId).ToList();
                return View(Model);
            }



            var Employee = new Data.Employee();
            Employee.EmployeeId = Model.SelectedEmployee.EmployeeId;
            Employee.CompanyId = Model.CompanyId;
            Employee.FirstName = Model.SelectedEmployee.FirstName;
            Employee.LastName = Model.SelectedEmployee.LastName;
            Employee.EmailAddress = Model.SelectedEmployee.EmailAddress;
            Employee.Phonenumber = Model.SelectedEmployee.Phonenumber;
            Employee.SSN = Model.SelectedEmployee.SSN;
            Employee.UserName = Model.SelectedEmployee.UserName;
            Employee.Password = Model.SelectedEmployee.Password;
            Employee.EmployeeNumber = Model.SelectedEmployee.EmployeeNumber;
            Employee.RoleId = Model.SelectedEmployee.RoleId;
            Employee.IsOvertimeCalculated = Model.SelectedEmployee.IsOvertimeCalculated;
            Employee.IsActive = Model.SelectedEmployee.IsActive;
            Employee.UpdatedById = Model.LoginId;
            Employee.UpdatedOn = DateTime.UtcNow;

            Context.Entry(Employee).State = Model.SelectedEmployee.EmployeeId == 0 ? System.Data.Entity.EntityState.Added : System.Data.Entity.EntityState.Modified;
            Context.SaveChanges();

            return RedirectPermanent("/" + CompanyURL + "/adminusers");
        }


        [Route("{CompanyURL}/adminrates")]
        public ActionResult AdminRates(String CompanyURL, int? RateId) {
            var Model = new AdminUserRatesViewModel();
            PopulateModel(Model);
            if (!ModelState.IsValid)
                return View(Model);

            Model.EmployeeRates = Context.EmployeeRates.Where(r => r.CompanyId == Model.CompanyId).OrderBy(r => r.Employee.LastName).ThenBy(r => r.Employee.FirstName).ThenBy(r => r.EffectiveStartDate).ToList();


            Model.Employees = new List<SelectListItem>();
            foreach (var Employee in Context.Employees.Where(e => e.IsActive && e.CompanyId == Model.CompanyId).OrderBy(e => e.LastName)) {
                if (Model.EmployeeId == 0)
                    Model.EmployeeId = Employee.EmployeeId;

                SelectListItem selectList = new SelectListItem() {
                    Text = Employee.LastName + ", " + Employee.FirstName,
                    Value = Employee.EmployeeId.ToString()
                };
                Model.Employees.Add(selectList);
            }



            if (RateId == null) {
                Model.SelectedEmployeeRate = new Data.EmployeeRate();
                Model.SelectedEmployeeRate.EffectiveStartDate = DateTime.Today;
            } else
                Model.SelectedEmployeeRate = Context.EmployeeRates.Where(r => r.RateId == RateId).FirstOrDefault();


            return View(Model);
        }



        [HttpPost]
        [Route("{CompanyURL}/adminrates")]
        public ActionResult AdminRates(String CompanyURL, AdminUserRatesViewModel Model) {
            PopulateModel(Model);
            if (!ModelState.IsValid)
                return View(Model);

            if (!ModelState.IsValid) {
                Model.EmployeeRates = Context.EmployeeRates.Where(r => r.CompanyId == Model.CompanyId).OrderBy(r => r.Employee.LastName).ThenBy(r => r.EffectiveStartDate).ToList();



                Model.Employees = new List<SelectListItem>();
                foreach (var Employee in Context.Employees.Where(e => e.IsActive && e.CompanyId == Model.CompanyId).OrderBy(e => e.LastName)) {
                    if (Model.EmployeeId == 0)
                        Model.EmployeeId = Employee.EmployeeId;

                    SelectListItem selectList = new SelectListItem() {
                        Text = Employee.LastName + ", " + Employee.FirstName,
                        Value = Employee.EmployeeId.ToString()
                    };
                    Model.Employees.Add(selectList);
                }

                return View(Model);
            }


            if (Model.SelectedEmployeeRate.RateId == 0) {
                var PriorEmployeeRate = Context.EmployeeRates.Where(r => r.EmployeeId == Model.SelectedEmployeeRate.EmployeeId && r.EffectiveEndDate == null).FirstOrDefault();
                if (PriorEmployeeRate != null) {
                    PriorEmployeeRate.EffectiveEndDate = Model.SelectedEmployeeRate.EffectiveStartDate.AddDays(-1);
                    Context.Entry(PriorEmployeeRate).State = System.Data.Entity.EntityState.Modified;
                }
            }
            var EmployeeRate = new Data.EmployeeRate();
            EmployeeRate.RateId = Model.SelectedEmployeeRate.RateId;
            EmployeeRate.EmployeeId = Model.SelectedEmployeeRate.EmployeeId;
            EmployeeRate.CompanyId = Model.CompanyId;
            EmployeeRate.EffectiveStartDate = Model.SelectedEmployeeRate.EffectiveStartDate;
            EmployeeRate.EffectiveEndDate = Model.SelectedEmployeeRate.EffectiveEndDate;
            EmployeeRate.RateAmount = Model.SelectedEmployeeRate.RateAmount;

            EmployeeRate.UpdatedById = Model.LoginId;
            EmployeeRate.UpdatedOn = DateTime.UtcNow;

            Context.Entry(EmployeeRate).State = Model.SelectedEmployeeRate.RateId == 0 ? System.Data.Entity.EntityState.Added : System.Data.Entity.EntityState.Modified;
            Context.SaveChanges();

            return RedirectPermanent("/" + CompanyURL + "/adminrates");
        }




        [Route("{CompanyURL}/adminperiods")]
        public ActionResult AdminPeriods(String CompanyURL) {
            var Model = new AdminPeriodsViewModel();
            PopulateModel(Model);
            if (!ModelState.IsValid)
                return View(Model);

            Model.Periods = Context.Periods.Where(r => r.CompanyId == Model.CompanyId).OrderBy(r => r.PeriodStart).ThenBy(r => r.PeriodEnd).ToList();
            var LastPeriod = Model.Periods.LastOrDefault();

            Model.SelectedPeriod = new Data.Period();
            if (LastPeriod != null) {
                Model.SelectedPeriod.PeriodStart = ((DateTime)LastPeriod.PeriodStart).AddDays(1);
                Model.SelectedPeriod.PeriodEnd = ((DateTime)LastPeriod.PeriodEnd).AddDays(1);
            } else {
                Model.SelectedPeriod.PeriodStart = DateTime.Today;
                Model.SelectedPeriod.PeriodEnd = DateTime.Today;
            }
            Model.SelectedPeriod.Reminder1Date = ((DateTime)Model.SelectedPeriod.PeriodEnd).AddDays(-2);
            Model.SelectedPeriod.Reminder2Date = Model.SelectedPeriod.PeriodEnd;

            var Periods = Context.Periods.Where(p => p.PeriodStatusId == 0).ToList();
            Model.UnlockedPeriods = Periods.Select(f => new SelectListItem {
                Value = f.PeriodId.ToString(),
                Text = ((DateTime)f.PeriodStart).ToString("MM/dd/yyyy") + " - " + ((DateTime)f.PeriodEnd).ToString("MM/dd/yyyy")
            });


            Periods = Context.Periods.Where(p => p.PeriodStatusId == 1).ToList();
            Model.LockedPeriods = Periods.Select(f => new SelectListItem {
                Value = f.PeriodId.ToString(),
                Text = ((DateTime)f.PeriodStart).ToString("MM/dd/yyyy") + " - " + ((DateTime)f.PeriodEnd).ToString("MM/dd/yyyy")
            });

            return View(Model);
        }

        public ActionResult AddPeriod(AdminPeriodsViewModel Model) {
            PopulateModel(Model);
            if (!ModelState.IsValid)
                return View(Model);

            var Period = new Data.Period();
            Period.CompanyId = Model.CompanyId;
            Period.PeriodStart = Model.SelectedPeriod.PeriodStart;
            Period.PeriodEnd = ((DateTime)Model.SelectedPeriod.PeriodStart).AddDays(6);
            Period.Reminder1Date = Model.SelectedPeriod.Reminder1Date;
            Period.Reminder2Date = Model.SelectedPeriod.Reminder2Date;
            Period.PeriodStatusId = 0;
            Context.Entry(Period).State = System.Data.Entity.EntityState.Added;
            Context.SaveChanges();

            return RedirectPermanent("/" + Model.CompanyURL + "/AdminPeriods");
        }

        public ActionResult LockPeriod(AdminPeriodsViewModel Model, int? UnlockedPeriodId) {
            PopulateModel(Model);
            if (!ModelState.IsValid)
                return View(Model);

            if (UnlockedPeriodId!=null) {
                var Period = Context.Periods.Where(p => p.PeriodId == UnlockedPeriodId).FirstOrDefault();
                if (Period != null) {
                    Period.PeriodStatusId = 1;
                    Context.Entry(Period).State = System.Data.Entity.EntityState.Modified;
                    Context.SaveChanges();
                }
            }


            return RedirectPermanent("/" + Model.CompanyURL + "/AdminPeriods");
        }

        public ActionResult UnlockPeriod(AdminPeriodsViewModel Model, int? LockedPeriodId) {
            PopulateModel(Model);
            if (!ModelState.IsValid)
                return View(Model);

            if (LockedPeriodId != null) {
                var Period = Context.Periods.Where(p => p.PeriodId == LockedPeriodId).FirstOrDefault();
                if (Period != null) {
                    Period.PeriodStatusId = 0;
                    Context.Entry(Period).State = System.Data.Entity.EntityState.Modified;
                    Context.SaveChanges();
                }
            }


            return RedirectPermanent("/" + Model.CompanyURL + "/AdminPeriods");
        }



        [Route("{CompanyURL}/TimesheetSubmissionEmail")]
        public ActionResult AdminEmail(String CompanyURL, string EmailName) {
            var Model = new AdminSetting();
            Model.Caption = EmailName==null ? "Timesheet Notification Email" : EmailName;
            Model.Key = EmailName == null ? "TimesheetSubmissionEmail" : EmailName;

            PopulateModel(Model);
            if (!ModelState.IsValid)
                return View(Model);


            var Email = Context.Emails.Where(e => e.CompanyId == Model.CompanyId && e.EmailName == Model.Caption).FirstOrDefault();
            if(Email!=null) {
                Model.Value = Email.EmailText;
            }

            return View(Model);
        }

        [HttpPost]
        [Route("{CompanyURL}/TimesheetSubmissionEmail"), ValidateInput(false)]
        public ActionResult AdminEmail(String CompanyURL, AdminSetting Model) {
            PopulateModel(Model);
            if (!ModelState.IsValid)
                return View(Model);


            var Email = Context.Emails.Where(e => e.CompanyId == Model.CompanyId && e.EmailName == Model.Key).FirstOrDefault();
            if (Email == null) {
                Email = new Data.Email();

                Email.CompanyId = Model.CompanyId;
                Email.EmailName = Model.Caption;
                Email.EmailText = Model.Value;
                Context.Entry(Email).State = System.Data.Entity.EntityState.Added;
            } else {
                Email.EmailText = Model.Value;
                Context.Entry(Email).State = System.Data.Entity.EntityState.Modified;
            }
            Context.SaveChanges();


            return View(Model);
        }
    }
}