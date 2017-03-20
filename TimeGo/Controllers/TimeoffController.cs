using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace TimeGo.Controllers {
    public class TimeoffController : BaseController {

        [AllowAnonymous]
        [Route("{CompanyURL}/timeoff")]
        public ActionResult Index(String CompanyURL) {
            var Model = new Models.TimeoffViewModel();
            PopulateModel(Model);

            if (Model.LoginId == 0)
                return RedirectPermanent("/Login");

            Model.TimeoffRequests = Context.TimeoffRequests.Where(to => to.EmployeeId == Model.LoginId).OrderBy(tor => tor.FromDate).ToList();
            return View(Model);
        }


        [AllowAnonymous]
        [HttpPost]
        [Route("{CompanyURL}/timeoff")]
        public ActionResult Index(String CompanyURL, Models.TimeoffViewModel Model) {
            PopulateModel(Model);

            if (Model.LoginId == 0)
                return RedirectPermanent("/Login");

            if (!ModelState.IsValid)
                return View(Model);

            Data.TimeoffRequest Timeoff = new Data.TimeoffRequest();
            Timeoff.EmployeeId = Model.LoginId;
            Timeoff.CompanyId = Model.CompanyId;
            Timeoff.FromDate = (DateTime)Model.StartDate;
            Timeoff.ToDate = (DateTime)Model.EndDate;
            Timeoff.ReturningToWork = (DateTime)Model.ReturningToWork;
            Timeoff.Reason = Model.Reason;
            Timeoff.SubmittedOn = DateTime.UtcNow;
            Timeoff.ApprovalStatusId = 10;

            Context.Entry(Timeoff).State = System.Data.Entity.EntityState.Added;
            Context.SaveChanges();

            ModelState.Clear();

            Model = new Models.TimeoffViewModel();
            PopulateModel(Model);
            Model.TimeoffRequests = Context.TimeoffRequests.Where(to => to.EmployeeId == Model.LoginId).OrderBy(tor => tor.FromDate).ToList();
            return View(Model);
        }


        [AllowAnonymous]
        [Route("{CompanyURL}/admintimeoff")]
        public ActionResult AdminTimeoff(String CompanyURL) {
            var Model = new Models.TimeoffViewModel();
            PopulateModel(Model);

            if (Model.LoginId == 0)
                return RedirectPermanent("/Login");

            Model.TimeoffRequests = Context.TimeoffRequests.Where(tor=>tor.CompanyId == Model.CompanyId).OrderBy(tor=>tor.FromDate).ToList();
            return View(Model);
        }


        [AllowAnonymous]
        [Route("{CompanyURL}/AdminTimeoffApprove")]
        public ActionResult AdminTimeoffApprove(String CompanyURL, int RequestId) {
            var Model = new Models.TimeoffViewModel();
            PopulateModel(Model);

            if (Model.LoginId == 0)
                return RedirectPermanent("/Login");


            var Request = Context.TimeoffRequests.Where(tor => tor.TimeoffId == RequestId).FirstOrDefault();
            Request.ApprovalStatusId = 11;
            Request.ApprovedById = Model.LoginId;
            Request.ApprovedOn = DateTime.UtcNow;


            Context.Entry(Request).State = System.Data.Entity.EntityState.Modified;
            Context.SaveChanges();

            Model.TimeoffRequests = Context.TimeoffRequests.Where(tor => tor.CompanyId == Model.CompanyId).OrderBy(tor => tor.FromDate).ToList();
            return RedirectPermanent("/"+CompanyURL+"/AdminTimeoff");
        }


        [AllowAnonymous]
        [Route("{CompanyURL}/AdminTimeoffDeny")]
        public ActionResult AdminTimeoffDeny(String CompanyURL, int RequestId) {
            var Model = new Models.TimeoffViewModel();
            PopulateModel(Model);

            if (Model.LoginId == 0)
                return RedirectPermanent("/Login");


            var Request = Context.TimeoffRequests.Where(tor => tor.TimeoffId == RequestId).FirstOrDefault();
            Request.ApprovalStatusId = 12;

            Context.Entry(Request).State = System.Data.Entity.EntityState.Modified;
            Context.SaveChanges();

            Model.TimeoffRequests = Context.TimeoffRequests.Where(tor => tor.CompanyId == Model.CompanyId).OrderBy(tor => tor.FromDate).ToList();
            return RedirectPermanent("/" + CompanyURL + "/AdminTimeoff");
        }
    }
}