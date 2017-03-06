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

            Model.TimeoffRequests = Context.TimeoffRequests.Where(to => to.EmployeeId == Model.LoginId).ToList();
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
            Timeoff.FromDate = Model.StartDate;
            Timeoff.ToDate = Model.EndDate;
            Timeoff.ReturningToWork = Model.ReturningToWork;
            Timeoff.Reason = Model.Reason;

            Context.Entry(Timeoff).State = System.Data.Entity.EntityState.Added;
            Context.SaveChanges();

            ModelState.Clear();
            return View(Model);
        }

        public void SaveTimesheet(String CompanyURL, Models.TimesheetViewModel Model) {
            var Timesheet = Context.Timesheets.Where(t=>t.PeriodId==Model.SelectedPeriodId && t.EmployeeId==Model.LoginId).FirstOrDefault();
            if (Timesheet == null) {
                Timesheet = new Data.Timesheet();

                Timesheet.CompanyId = Model.CompanyId;
                Timesheet.PeriodId = Model.SelectedPeriodId;
                Timesheet.EmployeeId = Model.LoginId;
            }

            Timesheet.EmployeeNotes=Model.EmployeeNotes;
            Timesheet.LockStatusId = 0;
            Timesheet.ApprovalStatusId = 0;
            Timesheet.SavedOn = DateTime.UtcNow;
            Timesheet.RevisedById = Model.LoginId;

            if (Model.IsSubmit == true) {
                Timesheet.LockStatusId = 1;
                Timesheet.ApprovalStatusId = 1;
                Timesheet.SubmittedOn = DateTime.UtcNow;
            }

            Context.Entry(Timesheet).State = Timesheet.TimesheetId == 0 ? System.Data.Entity.EntityState.Added : System.Data.Entity.EntityState.Modified;
            Context.SaveChanges();

            var TimeLines=Model.TimesheetData.Split('\n');
            foreach(var TimeLine in TimeLines) {
                if (TimeLine != "") {
                    var LineDetails = TimeLine.Split('|');

                    var Line = new Data.TimesheetLine();
                    if (LineDetails[0] != "") {
                        int tmpLineId = int.Parse(LineDetails[0]);
                        Line = Context.TimesheetLines.Where(tl => tl.LineId == tmpLineId).FirstOrDefault();
                    }

                    Line.TimesheetId = Timesheet.TimesheetId;
                    Line.StartTime = DateTime.Parse(LineDetails[1]);
                    Line.EndTime = DateTime.Parse(LineDetails[2]);
                    Line.TaskId = int.Parse(LineDetails[3]);

                    Context.Entry(Line).State = Line.LineId == 0 ? System.Data.Entity.EntityState.Added : System.Data.Entity.EntityState.Modified;
                    Context.SaveChanges();
                }
            }
        }
    }
}