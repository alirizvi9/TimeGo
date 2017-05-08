using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using TimeGo.Models;

namespace TimeGo.Controllers {
    public class TimesheetController : BaseController {

        [AllowAnonymous]
        [Route("{CompanyURL}/time")]
        public ActionResult Index(String CompanyURL, int? SelectedPeriodId) {
            var Model = new Models.TimesheetViewModel();
            PopulateModel(Model);

            if (Model.LoginId == 0)
                return Expired(CompanyURL);

            PopulateTimesheetModel(Model, 0, 0);
            return View(Model);
        }

        [AllowAnonymous]
        public ActionResult RemoveLine(int? LineId) {
            var Model = new Models.TimesheetViewModel();
            PopulateModel(Model);

            if (Model.LoginId == 0)
                return Expired(Model.CompanyURL);

            var Line = Context.TimesheetLines.Where(l => l.LineId == LineId).FirstOrDefault();
            if(Line!=null) {
                Context.Entry(Line).State = System.Data.Entity.EntityState.Deleted;
                Context.SaveChanges();
            }

            return RedirectPermanent("/" + Model.CompanyURL + "/time");
        }

        public void PopulateTimesheetModel(Models.TimesheetViewModel Model, int SelectedPeriodId, int SelectedEmployeeId) {
            if (SelectedEmployeeId == 0) SelectedEmployeeId = Model.LoginId;

            var Periods = Context.Periods.Where(p=>p.CompanyId==Model.CompanyId).ToList();
            Model.PeriodListItems = Periods.Select(f => new SelectListItem {
                Value = f.PeriodId.ToString(),
                Text = ((DateTime)f.PeriodStart).ToString("dd-MMM-yy") + " to " + ((DateTime)f.PeriodEnd).ToString("dd-MMM-yy")
            });
            if (SelectedPeriodId != 0) Model.SelectedPeriodId = (int)SelectedPeriodId;
            if (Model.SelectedPeriodId == 0)
                Model.SelectedPeriodId = int.Parse(Model.PeriodListItems.FirstOrDefault().Value);


            var TaskAlloweds = Context.TaskAlloweds.Where(ta => ta.IsActive == true && ta.EmployeeId == SelectedEmployeeId).ToList();
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


            var Timesheet = Context.Timesheets.Where(t => t.PeriodId == Model.SelectedPeriodId && t.EmployeeId == SelectedEmployeeId).FirstOrDefault();
            if (Timesheet != null) {
                Model.EmployeeNotes = Timesheet.EmployeeNotes;
                Model.IsLocked = (Timesheet.LockStatusId != 0);
                Model.LastSubmitted = Timesheet.SubmittedOn;
                Model.PayroleNotes = Timesheet.ApproverNotes;
                Model.LockStatusId = Timesheet.LockStatusId;
                Model.ApprovalStatusId = Timesheet.ApprovalStatusId;

                Model.LastApproved = Timesheet.ApprovedOn;

                var Lines = Context.TimesheetLines.Where(tl => tl.TimesheetId == Timesheet.TimesheetId);
                String TimesheetData = "";

                foreach (Data.TimesheetLine Line in Lines) {
                    TimesheetData += Line.LineId + "|";
                    TimesheetData += ((DateTime)Line.StartTime).ToString("MM/dd/yyyy HH:mm") + "|";
                    TimesheetData += ((DateTime)Line.EndTime).ToString("MM/dd/yyyy HH:mm") + "|";
                    TimesheetData += Line.TaskId + "\n";
                }
                Model.TimesheetData = TimesheetData;
            } else {
                Model.EmployeeNotes = "";
                Model.IsLocked = false;
                Model.LastSubmitted = null;
                Model.PayroleNotes = "";
                Model.LockStatusId = 0;
                Model.ApprovalStatusId = 0;

                Model.LastApproved = null;
                Model.TimesheetData = "";
            }

        }

        [AllowAnonymous]
        [HttpPost]
        [Route("{CompanyURL}/time")]
        public ActionResult Index(String CompanyURL, Models.TimesheetViewModel Model) {
            PopulateModel(Model);

            if (Model.LoginId == 0)
                return Expired(CompanyURL);

            Model.SelectedEmployeeId = Model.LoginId;
            if (Model.IsSave == true)
                SaveTimesheet(CompanyURL, Model);


            if (Model.IsReviseRequsted == true) {
                var Timesheet = Context.Timesheets.Where(t => t.PeriodId == Model.SelectedPeriodId && t.EmployeeId == Model.SelectedEmployeeId).FirstOrDefault();
                Timesheet.LockStatusId = 2;
                Context.Entry(Timesheet).State = System.Data.Entity.EntityState.Modified;
                Context.SaveChanges();
            }


            Model.IsSave = false;
            Model.IsSubmit = false;

            PopulateTimesheetModel(Model, Model.SelectedPeriodId,0);
            ModelState.Clear();
            return View(Model);
            //return RedirectPermanent("/" + CompanyURL + "/time?SelectedPeriodId=" +Model.SelectedPeriodId);
        }

        public void SaveTimesheet(String CompanyURL, Models.TimesheetViewModel Model) {
            var Timesheet = Context.Timesheets.Where(t => t.PeriodId == Model.SelectedPeriodId && t.EmployeeId == Model.SelectedEmployeeId).FirstOrDefault();
            if (Timesheet == null) {
                Timesheet = new Data.Timesheet();

                Timesheet.CompanyId = Model.CompanyId;
                Timesheet.PeriodId = Model.SelectedPeriodId;
                Timesheet.EmployeeId = Model.SelectedEmployeeId;
                Timesheet.LockStatusId = 0;
                Timesheet.ApprovalStatusId = 0;
                //Timesheet.ApprovalStatusId = Model.ApprovalStatusId;
            }


            Timesheet.EmployeeNotes = Model.EmployeeNotes;
            Timesheet.SavedOn = DateTime.UtcNow;
            Timesheet.RevisedById = Model.LoginId;

            if (Model.IsSubmit == true) {
                Timesheet.LockStatusId = 1;
                Timesheet.ApprovalStatusId = 1;
                Timesheet.SubmittedOn = DateTime.UtcNow;
            }

            if (Model.IsApprove == true) {
                Timesheet.ApprovedOn= DateTime.UtcNow;
                Timesheet.ApprovedById = Model.LoginId;
                Timesheet.ApprovalStatusId = 2;
                Timesheet.LockStatusId = 1;
            }

            Context.Entry(Timesheet).State = Timesheet.TimesheetId == 0 ? System.Data.Entity.EntityState.Added : System.Data.Entity.EntityState.Modified;
            Context.SaveChanges();

            if (!String.IsNullOrEmpty( Model.TimesheetData)) { 
            var TimeLines = Model.TimesheetData.Split('\n');
                foreach (var TimeLine in TimeLines) {
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

                        if (Model.IsApprove == true) {
                            Line.ApprovalStatusId = 2;
                            Line.ApprovedById = Model.LoginId;
                            Line.ApprovedOn = DateTime.UtcNow;
                        }

                        Context.Entry(Line).State = Line.LineId == 0 ? System.Data.Entity.EntityState.Added : System.Data.Entity.EntityState.Modified;
                        Context.SaveChanges();
                    }
                }
            }
        }



        [AllowAnonymous]
        [HttpGet]
        [Route("{CompanyURL}/admintime")]
        public ActionResult AdminTime(String CompanyURL) {
            var Model = new Models.TimesheetViewModel();
            PopulateModel(Model);

            if (Model.LoginId == 0)
                return Expired(CompanyURL);

            PopulateAdminTimeModel(Model);

            return View(Model);
        }

        [AllowAnonymous]
        [HttpPost]
        [Route("{CompanyURL}/admintime")]
        public ActionResult AdminTime(String CompanyURL, TimesheetViewModel Model) {   
            PopulateModel(Model);

            if (Model.LoginId == 0)
                return Expired(CompanyURL);

            //Approve Timesheet
            if (Model.IsApprove)
                SaveTimesheet(CompanyURL, Model);

            PopulateAdminTimeModel(Model);
            ModelState.Clear();
            return View(Model);
        }


        private void PopulateAdminTimeModel(TimesheetViewModel Model) {
            Model.IsAdmin = true;

            var Periods = Context.Periods.Where(p => p.CompanyId == Model.CompanyId).ToList();
            Model.PeriodListItems = Periods.Select(f => new SelectListItem {
                Value = f.PeriodId.ToString(),
                Text = ((DateTime)f.PeriodStart).ToString("MM/dd/yyyy") + " - " + ((DateTime)f.PeriodEnd).ToString("MM/dd/yyyy")
            });

            if (Model.SelectedPeriodId == 0 && Model.PeriodListItems != null && Model.PeriodListItems.Any()) {
                Model.SelectedPeriodId = int.Parse(Model.PeriodListItems.First().Value);
            }


            //Save Notes
            if(Model.IsSave) {
                var Timesheet = Context.Timesheets.Where(ts => ts.PeriodId == Model.SelectedPeriodId && ts.EmployeeId == Model.SelectedEmployeeId).FirstOrDefault();
                if (Timesheet == null) {
                    Timesheet = new Data.Timesheet();
                    Timesheet.PeriodId = Model.SelectedPeriodId;
                    Timesheet.EmployeeId = Model.SelectedEmployeeId;
                    Timesheet.ApproverNotes = Model.PayroleNotes;
                } else {
                    Timesheet.ApproverNotes = Model.PayroleNotes;
                    Context.Entry(Timesheet).State = System.Data.Entity.EntityState.Modified;
                }
                Context.SaveChanges();
            }

            
            //Unlock Timesheet
            if (Model.IsReviseRequsted || Model.IsResubmit) {
                var Timesheet = Context.Timesheets.Where(ts => ts.PeriodId == Model.SelectedPeriodId && ts.EmployeeId == Model.SelectedEmployeeId).FirstOrDefault();
                if (Timesheet != null) {
                    foreach(var Line in Timesheet.TimesheetLines) {
                        Line.LockStatusId = 0;
                        Line.ApprovalStatusId = 0;
                        Context.Entry(Line).State = System.Data.Entity.EntityState.Modified;
                    }

                    Timesheet.ApprovalStatusId = 0;
                    Timesheet.ApprovedOn = null;
                    Timesheet.SubmittedOn = null;
                    Timesheet.ApprovedById = null;
                    Timesheet.LockStatusId = 0;
                    Context.Entry(Timesheet).State = System.Data.Entity.EntityState.Modified;

                }
                Context.SaveChanges();
            }




            List<SelectListItem> TimesheetList = new List<SelectListItem>();
            var Employees = Context.Employees.Where(e => e.CompanyId == Model.CompanyId && e.IsActive).ToList();
            foreach (var Employee in Employees) {
                var TS = Employee.Timesheets.Where(ts => ts.PeriodId == Model.SelectedPeriodId).FirstOrDefault();
                if (TS == null) {
                    TimesheetList.Add(new SelectListItem {
                        Value = Employee.EmployeeId.ToString(),
                        Text = "4Create new timesheet, " + Employee.FirstName + " " + Employee.LastName
                    });
                } else {
                    if (TS.ApprovalStatusId == 0)
                        TimesheetList.Add(new SelectListItem {
                            Value = Employee.EmployeeId.ToString(),
                            Text = "3Edit timesheet, " + Employee.FirstName + " " + Employee.LastName
                        });
                    if (TS.ApprovalStatusId == 1 || TS.ApprovalStatusId == 2)
                        if (TS.LockStatusId == 2)
                            TimesheetList.Add(new SelectListItem {
                                Value = Employee.EmployeeId.ToString(),
                                Text = "2Unlock requested, " + Employee.FirstName + " " + Employee.LastName
                            });
                        else {
                            if (TS.TimesheetLines.Where(l => l.ApprovalStatusId != 2).Any()) {
                                TimesheetList.Add(new SelectListItem {
                                    Value = Employee.EmployeeId.ToString(),
                                    Text = "1Approve timesheet, " + Employee.FirstName + " " + Employee.LastName
                                });

                            } else {
                                TimesheetList.Add(new SelectListItem {
                                    Value = Employee.EmployeeId.ToString(),
                                    Text = "5Review approved timesheet, " + Employee.FirstName + " " + Employee.LastName
                                });
                            }
                        }
                }
            }
            TimesheetList = TimesheetList.OrderBy(tsl => tsl.Text).ToList();
            TimesheetList.ForEach(tsl => tsl.Text = tsl.Text.Substring(1));
            Model.Timesheets = TimesheetList;

            if (Model.Timesheets.FirstOrDefault()!=null && Model.SelectedEmployeeId == 0) Model.SelectedEmployeeId = int.Parse(Model.Timesheets.FirstOrDefault().Value);
            PopulateTimesheetModel(Model,Model.SelectedPeriodId, Model.SelectedEmployeeId);


            var TaskAlloweds = Context.TaskAlloweds.Where(ta => ta.IsActive == true && ta.EmployeeId == Model.LoginId).ToList();
            List<SelectListItem> TaskListItems = TaskAlloweds.Select(f => new SelectListItem {
                Value = f.Task.TaskId.ToString(),
                Text = f.Task.TaskName
            }).ToList();
        }
    }
}