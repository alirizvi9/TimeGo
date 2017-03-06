using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace TimeGo.Controllers {
    public class TimesheetController : BaseController {

        [AllowAnonymous]
        [Route("{CompanyId}/time")]
        public ActionResult Index(String CompanyId, int? SelectedPeriodId) {
            var Model = new Models.TimesheetViewModel();
            PopulateModel(Model);

            if (Model.LoginId == 0)
                return RedirectPermanent("/Login");

            PopulateTimesheetModel(Model, 0);
            return View(Model);
        }

        public void PopulateTimesheetModel(Models.TimesheetViewModel Model, int SelectedPeriodId) { 
            var Periods = Context.Periods.ToList();
            Model.PeriodListItems = Periods.Select(f => new SelectListItem {
                Value = f.PeriodId.ToString(),
                Text = ((DateTime)f.PeriodStart).ToString("MM/dd/yyyy") + " - " + ((DateTime)f.PeriodEnd).ToString("MM/dd/yyyy")
            });
            if (SelectedPeriodId != 0) Model.SelectedPeriodId = (int)SelectedPeriodId;
            if (Model.SelectedPeriodId == 0)
                Model.SelectedPeriodId = int.Parse(Model.PeriodListItems.FirstOrDefault().Value);


            var TaskAlloweds = Context.TaskAlloweds.Where(ta => ta.IsActive == true && ta.EmployeeId == Model.LoginId).ToList();
            List<SelectListItem> TaskListItems = TaskAlloweds.Select(f => new SelectListItem {
                Value = f.Task.TaskId.ToString(),
                Text = f.Task.TaskName
            }).ToList();
            TaskListItems.Insert(0, new SelectListItem() { Text = "[SELECT A TASK]", Value = "" });
            Model.TaskListItems = TaskListItems;

            var SelectedPeriod = Periods.Where(p => p.PeriodId == Model.SelectedPeriodId).FirstOrDefault();
            var tmpDate = (DateTime)SelectedPeriod.PeriodStart;


            Model.SelectedPeriodDates = new List<DateTime>();
            while (tmpDate <= SelectedPeriod.PeriodEnd) {
                Model.SelectedPeriodDates.Add(tmpDate);
                tmpDate = tmpDate.AddDays(1);
            }


            var Timesheet = Context.Timesheets.Where(t => t.PeriodId == Model.SelectedPeriodId && t.EmployeeId == Model.LoginId).FirstOrDefault();
            if (Timesheet != null) {
                Model.EmployeeNotes = Timesheet.EmployeeNotes;
                Model.IsLocked = (Timesheet.LockStatusId != 0);
                Model.LastSubmitted = Timesheet.SubmittedOn;
                var Lines = Context.TimesheetLines.Where(tl => tl.TimesheetId == Timesheet.TimesheetId);
                String TimesheetData = "";

                foreach(Data.TimesheetLine Line in Lines) {
                    TimesheetData += Line.LineId + "|";
                    TimesheetData += ((DateTime)Line.StartTime).ToString("MM/dd/yyyy HH:mm") + "|";
                    TimesheetData += ((DateTime)Line.EndTime).ToString("MM/dd/yyyy HH:mm") + "|";
                    TimesheetData += Line.TaskId+"\n";
                }
                Model.TimesheetData = TimesheetData;
            }

        }

        [AllowAnonymous]
        [HttpPost]
        [Route("{CompanyURL}/time")]
        public ActionResult Index(String CompanyURL, Models.TimesheetViewModel Model) {
            PopulateModel(Model);

            if (Model.LoginId == 0)
                return RedirectPermanent("/Login");


            if (Model.IsSave == true)
                SaveTimesheet(CompanyURL, Model);

            Model.IsSave = false;
            Model.IsSubmit = false;

            PopulateTimesheetModel(Model, Model.SelectedPeriodId);
            ModelState.Clear();
            return View(Model);
            //return RedirectPermanent("/" + CompanyURL + "/time?SelectedPeriodId=" +Model.SelectedPeriodId);
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