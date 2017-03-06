using FluentMigrator;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TimeGo.DataModel.SchemaChanges
{
    [Migration(201703060847)]
    public class frm_20170306_0847 : AutoReversingMigration {
        public override void Up() {
            Alter.Table("TimeoffRequests")
                .AlterColumn("ApprovalStatusId").AsInt32().WithDefaultValue(10);

            Insert.IntoTable("ApprovalStatus").Row(new { ApprovalStatusId = 10, ApprovalStatusType = "Waiting for Approval" });
            Insert.IntoTable("ApprovalStatus").Row(new { ApprovalStatusId = 11, ApprovalStatusType = "Accepted" });
            Insert.IntoTable("ApprovalStatus").Row(new { ApprovalStatusId = 12, ApprovalStatusType = "Denined" });
        }
    }
}
