using FluentMigrator;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TimeGo.DataModel.SchemaChanges
{
    [Migration(201702260957)]
    public class frm_20170226_0957 : AutoReversingMigration {
        public override void Up() {
            Create.Table("Task")
                .WithColumn("TaskId").AsInt32().Identity().PrimaryKey().NotNullable()
                .WithColumn("CompanyId").AsInt32().Nullable()
                .WithColumn("TaskName").AsString(100).Nullable()
                .WithColumn("Approver1Email").AsString(100).Nullable()
                .WithColumn("Approver2Email").AsString(100).Nullable()
                .WithColumn("IsActive").AsInt32().Nullable()
                .WithColumn("UpdatedById").AsInt32().Nullable()
                .WithColumn("UpdatedOn").AsDateTime().Nullable();

            Create.ForeignKey("fk_Task_Company").FromTable("Task").ForeignColumn("CompanyId").ToTable("Company").PrimaryColumn("CompanyId");

            Create.Table("TaskAllowed")
                .WithColumn("TaskAllowedId").AsInt32().Identity().PrimaryKey().NotNullable()
                .WithColumn("TaskId").AsInt32().Nullable()
                .WithColumn("EmployeeId").AsInt32().Nullable();


            Create.ForeignKey("fk_TaskAllowed_Task").FromTable("TaskAllowed").ForeignColumn("TaskId").ToTable("Task").PrimaryColumn("TaskId");
            Create.ForeignKey("fk_TaskAllowed_Employee").FromTable("TaskAllowed").ForeignColumn("EmployeeId").ToTable("Employee").PrimaryColumn("EmployeeId");
        }
    }
}
