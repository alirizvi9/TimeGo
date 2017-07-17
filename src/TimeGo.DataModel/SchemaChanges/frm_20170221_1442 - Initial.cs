using FluentMigrator;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TimeGo.DataModel.SchemaChanges
{
    [Migration(201702211442)]
    public class frm_20170221_1442 : AutoReversingMigration {
        public override void Up() {
            //*************************************************************************
            //  CompanyApproved
            //*************************************************************************
            Create.Table("CompanyApproved")
                .WithColumn("CompanyApprovedId").AsInt32().PrimaryKey().NotNullable()
                .WithColumn("CompanyApprovedType").AsString(100).Nullable();

            Insert.IntoTable("CompanyApproved").Row(new { CompanyApprovedId = 0, CompanyApprovedType = "New Signup" });
            Insert.IntoTable("CompanyApproved").Row(new { CompanyApprovedId = 1, CompanyApprovedType = "Approved" });
            Insert.IntoTable("CompanyApproved").Row(new { CompanyApprovedId = 2, CompanyApprovedType = "Rejected" });



            //*************************************************************************
            //  CompanyApproved
            //*************************************************************************
            Create.Table("SubscriptionPlan")
                .WithColumn("SubscriptionPlanId").AsInt32().PrimaryKey().NotNullable()
                .WithColumn("SubscriptionPlanType").AsString(100).Nullable();

            Insert.IntoTable("SubscriptionPlan").Row(new { SubscriptionPlanId = 0, SubscriptionPlanType = "Free" });
            Insert.IntoTable("SubscriptionPlan").Row(new { SubscriptionPlanId = 1, SubscriptionPlanType = "Plan1" });
            Insert.IntoTable("SubscriptionPlan").Row(new { SubscriptionPlanId = 2, SubscriptionPlanType = "Plan2" });
            Insert.IntoTable("SubscriptionPlan").Row(new { SubscriptionPlanId = 3, SubscriptionPlanType = "Plan3" });



            //*************************************************************************
            //  CompanyApproved
            //*************************************************************************
            Create.Table("Company")
                .WithColumn("CompanyId").AsInt32().Identity().PrimaryKey().NotNullable()
                .WithColumn("CompanyName").AsString(100).Nullable()
                .WithColumn("ContactName").AsString(100).Nullable()
                .WithColumn("PhoneNumber").AsString(100).Nullable()
                .WithColumn("EmailAddress").AsString(100).Nullable()
                .WithColumn("TimeGoURL").AsString(100).Nullable()
                .WithColumn("CompanyApprovedId").AsInt32().WithDefaultValue(0)
                .WithColumn("BillingAddressLine1").AsString(100).Nullable()
                .WithColumn("BillingAddressLine2").AsString(100).Nullable()
                .WithColumn("BillingAddressCity").AsString(100).Nullable()
                .WithColumn("BillingAddressState").AsString(100).Nullable()
                .WithColumn("BillingAddressZip").AsString(100).Nullable()
                .WithColumn("BillingAddressCountry").AsString(100).Nullable()
                .WithColumn("SubscriptionPlanId").AsInt32().WithDefaultValue(0)
                .WithColumn("VacationApproverEmail").AsString(100).Nullable()
                .WithColumn("UpdatedById").AsInt32().Nullable()
                .WithColumn("UpdatedOn").AsDateTime().Nullable();

            Create.ForeignKey("fk_Company_CompanyApproved").FromTable("Company").ForeignColumn("CompanyApprovedId").ToTable("CompanyApproved").PrimaryColumn("CompanyApprovedId");
            Create.ForeignKey("fk_Company_SubscriptionPlan").FromTable("Company").ForeignColumn("SubscriptionPlanId").ToTable("SubscriptionPlan").PrimaryColumn("SubscriptionPlanId");


            //*************************************************************************
            //  Employees
            //*************************************************************************
            Create.Table("Employee")
                .WithColumn("EmployeeId").AsInt32().Identity().PrimaryKey().NotNullable()
                .WithColumn("CompanyId").AsInt32().Nullable()
                .WithColumn("EmployeeNumber").AsString(100).Nullable()
                .WithColumn("FirstName").AsString(100).Nullable()
                .WithColumn("LastName").AsString(100).Nullable()
                .WithColumn("EmailAddress").AsString(100).Nullable()
                .WithColumn("Password").AsString(100).Nullable()
                .WithColumn("SSN").AsString(4).Nullable()
                .WithColumn("IsAdmin").AsBoolean().WithDefaultValue(0)
                .WithColumn("IsActive").AsBoolean().WithDefaultValue(1)
                .WithColumn("IsOvertimeCalculated").AsBoolean().WithDefaultValue(1)
                .WithColumn("UpdatedById").AsInt32().Nullable()
                .WithColumn("UpdatedOn").AsDateTime().Nullable();

            Create.ForeignKey("fk_Employee_Company").FromTable("Employee").ForeignColumn("CompanyId").ToTable("Company").PrimaryColumn("CompanyId");
            Create.ForeignKey("fk_Employee_Employee").FromTable("Employee").ForeignColumn("UpdatedById").ToTable("Employee").PrimaryColumn("EmployeeId");


            //*************************************************************************
            //  Period
            //*************************************************************************
            Create.Table("Period")
                .WithColumn("PeriodId").AsInt32().Identity().PrimaryKey().NotNullable()
                .WithColumn("CompanyId").AsInt32().Nullable()
                .WithColumn("PeriodStart").AsDateTime().Nullable()
                .WithColumn("PeriodEnd").AsDateTime().Nullable()
                .WithColumn("Reminder1Date").AsDateTime().Nullable()
                .WithColumn("Reminder2Date").AsDateTime().Nullable()
                .WithColumn("PeriodStatusId").AsInt32().WithDefaultValue(0)
                .WithColumn("UpdatedById").AsInt32().Nullable()
                .WithColumn("UpdatedOn").AsDateTime().Nullable();

            Create.ForeignKey("fk_Period_Company").FromTable("Period").ForeignColumn("CompanyId").ToTable("Company").PrimaryColumn("CompanyId");
            Create.ForeignKey("fk_Period_Employee").FromTable("Period").ForeignColumn("UpdatedById").ToTable("Employee").PrimaryColumn("EmployeeId");


            
            //*************************************************************************
            //  ApprovalStatus
            //*************************************************************************
            Create.Table("ApprovalStatus")
                .WithColumn("ApprovalStatusId").AsInt32().PrimaryKey().NotNullable()
                .WithColumn("ApprovalStatusType").AsString(100).Nullable();

            Insert.IntoTable("ApprovalStatus").Row(new { ApprovalStatusId = 0, ApprovalStatusType = "Saved" });
            Insert.IntoTable("ApprovalStatus").Row(new { ApprovalStatusId = 1, ApprovalStatusType = "Submitted" });
            Insert.IntoTable("ApprovalStatus").Row(new { ApprovalStatusId = 2, ApprovalStatusType = "Approved" });


            //*************************************************************************
            //  CompanyApproved
            //*************************************************************************
            Create.Table("LockStatus")
                .WithColumn("LockStatusId").AsInt32().PrimaryKey().NotNullable()
                .WithColumn("LockStatusType").AsString(100).Nullable();

            Insert.IntoTable("LockStatus").Row(new { LockStatusId = 0, LockStatusType = "Unlocked" });
            Insert.IntoTable("LockStatus").Row(new { LockStatusId = 1, LockStatusType = "Locked" });
            Insert.IntoTable("LockStatus").Row(new { LockStatusId = 2, LockStatusType = "Request to unlock" });
            
            
            //*************************************************************************
            //  Timesheet
            //*************************************************************************
            Create.Table("Timesheet")
                .WithColumn("TimesheetId").AsInt32().Identity().PrimaryKey().NotNullable()
                .WithColumn("CompanyId").AsInt32().Nullable()
                .WithColumn("PeriodId").AsInt32().Nullable()
                .WithColumn("EmployeeId").AsInt32().Nullable()
                .WithColumn("EmployeeNotes").AsString().Nullable()
                .WithColumn("ApproverNotes").AsString().Nullable()

                .WithColumn("ApprovalStatusId").AsInt32().WithDefaultValue(0)
                .WithColumn("LockStatusId").AsInt32().WithDefaultValue(0)

                .WithColumn("RevisedById").AsInt32().Nullable()
                .WithColumn("ApprovedById").AsInt32().Nullable()

                .WithColumn("SavedOn").AsDateTime().Nullable()
                .WithColumn("SubmittedOn").AsDateTime().Nullable()
                .WithColumn("RevisedOn").AsDateTime().Nullable()
                .WithColumn("ApprovedOn").AsDateTime().Nullable();

            Create.ForeignKey("fk_Timesheet_Company").FromTable("Timesheet").ForeignColumn("CompanyId").ToTable("Company").PrimaryColumn("CompanyId");
            Create.ForeignKey("fk_Timesheet_Period").FromTable("Timesheet").ForeignColumn("PeriodId").ToTable("Period").PrimaryColumn("PeriodId");
            Create.ForeignKey("fk_Timesheet_Employee1").FromTable("Timesheet").ForeignColumn("EmployeeId").ToTable("Employee").PrimaryColumn("EmployeeId");
            Create.ForeignKey("fk_Timesheet_ApprovalStatus").FromTable("Timesheet").ForeignColumn("ApprovalStatusId").ToTable("ApprovalStatus").PrimaryColumn("ApprovalStatusId");
            Create.ForeignKey("fk_Timesheet_LockStatus").FromTable("Timesheet").ForeignColumn("LockStatusId").ToTable("LockStatus").PrimaryColumn("LockStatusId");
            Create.ForeignKey("fk_Timesheet_Employee2").FromTable("Timesheet").ForeignColumn("RevisedById").ToTable("Employee").PrimaryColumn("EmployeeId");
            Create.ForeignKey("fk_Timesheet_Employee3").FromTable("Timesheet").ForeignColumn("ApprovedById").ToTable("Employee").PrimaryColumn("EmployeeId");



            //*************************************************************************
            //  Timesheet
            //*************************************************************************
            Create.Table("TimesheetLine")
                .WithColumn("LineId").AsInt32().Identity().PrimaryKey().NotNullable()
                .WithColumn("TimesheetId").AsInt32().Nullable()
                .WithColumn("StartTime").AsDate().Nullable()
                .WithColumn("EndTime").AsDate().Nullable()
                .WithColumn("TaskId").AsInt32().Nullable();

            Create.ForeignKey("fk_TimesheetLine_Timesheet").FromTable("TimesheetLine").ForeignColumn("TimesheetId").ToTable("Timesheet").PrimaryColumn("TimesheetId");
        }
    }
}
