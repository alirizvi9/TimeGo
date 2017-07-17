using FluentMigrator;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TimeGo.DataModel.SchemaChanges
{
    [Migration(201703150915)]
    public class frm_20170315_0915 : AutoReversingMigration {
        public override void Up() {
            //*************************************************************************
            //  EmployeeRole
            //*************************************************************************
            Create.Table("Role")
                .WithColumn("RoleId").AsInt32().PrimaryKey().NotNullable()
                .WithColumn("RoleType").AsString(100).Nullable();

            Insert.IntoTable("Role").Row(new { RoleId = 0, RoleType = "Employee" });
            Insert.IntoTable("Role").Row(new { RoleId = 1, RoleType = "Task Manager" });
            Insert.IntoTable("Role").Row(new { RoleId = 2, RoleType = "Admin" });

            //*************************************************************************
            //  Employee
            //*************************************************************************
            Alter.Table("Employee")
                .AddColumn("RoleId").AsInt32().Nullable().WithDefaultValue(0);

            Execute.Sql(@"update Employee set RoleId=0 where IsAdmin<>1;");
            Execute.Sql(@"update Employee set RoleId=2 where IsAdmin=1;");

            Create.ForeignKey("fk_Employee_Role").FromTable("Employee").ForeignColumn("RoleId").ToTable("Role").PrimaryColumn("RoleId");

            Alter.Table("Task")
                .AddColumn("Approver1Id").AsInt32().Nullable();

            Alter.Table("Task")
                .AddColumn("Approver2Id").AsInt32().Nullable();


            //*************************************************************************
            //  Timesheet Line
            //*************************************************************************
            Alter.Table("TimesheetLine")
                .AddColumn("ApprovalStatusId").AsInt32().WithDefaultValue(0)
                .AddColumn("LockStatusId").AsInt32().WithDefaultValue(0)
                .AddColumn("RevisedById").AsInt32().Nullable()
                .AddColumn("ApprovedById").AsInt32().Nullable()
                .AddColumn("ApprovedOn").AsDateTime().Nullable();


            Create.ForeignKey("fk_TimesheetLine_ApprovalStatus").FromTable("TimesheetLine").ForeignColumn("ApprovalStatusId").ToTable("ApprovalStatus").PrimaryColumn("ApprovalStatusId");
            Create.ForeignKey("fk_TimesheetLine_LockStatus").FromTable("TimesheetLine").ForeignColumn("LockStatusId").ToTable("LockStatus").PrimaryColumn("LockStatusId");
            Create.ForeignKey("fk_TimesheetLine_Employee2").FromTable("TimesheetLine").ForeignColumn("RevisedById").ToTable("Employee").PrimaryColumn("EmployeeId");
            Create.ForeignKey("fk_TimesheetLine_Employee3").FromTable("TimesheetLine").ForeignColumn("ApprovedById").ToTable("Employee").PrimaryColumn("EmployeeId");
        }
    }
}
