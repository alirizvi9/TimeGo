using FluentMigrator;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TimeGo.DataModel.SchemaChanges
{
    [Migration(201703060824)]
    public class frm_20170306_0824 : AutoReversingMigration {
        public override void Up() {
            Create.Table("TimeoffRequests")
                .WithColumn("TimeoffId").AsInt32().Identity().PrimaryKey().NotNullable()
                .WithColumn("CompanyId").AsInt32().Nullable()
                .WithColumn("EmployeeId").AsInt32().Nullable()

                .WithColumn("FromDate").AsDateTime().Nullable()
                .WithColumn("ToDate").AsDateTime().Nullable()
                .WithColumn("Reason").AsString().Nullable()

                .WithColumn("ApprovalStatusId").AsInt32().WithDefaultValue(0)
                
                .WithColumn("SubmittedOn").AsDateTime().Nullable()
                .WithColumn("ApprovedById").AsInt32().Nullable()
                .WithColumn("ApprovedOn").AsDateTime().Nullable();

            Create.ForeignKey("fk_TimeoffRequests_Company").FromTable("TimeoffRequests").ForeignColumn("CompanyId").ToTable("Company").PrimaryColumn("CompanyId");
            Create.ForeignKey("fk_TimeoffRequests_Employee").FromTable("TimeoffRequests").ForeignColumn("EmployeeId").ToTable("Employee").PrimaryColumn("EmployeeId");
            Create.ForeignKey("fk_TimeoffRequests_ApprovalStatus").FromTable("TimeoffRequests").ForeignColumn("ApprovalStatusId").ToTable("ApprovalStatus").PrimaryColumn("ApprovalStatusId");
        }
    }
}
