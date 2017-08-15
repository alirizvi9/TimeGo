using FluentMigrator;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TimeGo.DataModel.SchemaChanges
{
    [Migration(201705072006)]
    public class frm_20170507_2006 : AutoReversingMigration {
        public override void Up() {
            //*************************************************************************
            //  CompanyApproved
            //*************************************************************************
            Create.Table("Email")
                .WithColumn("CompanyId").AsInt32().Identity().NotNullable()
                .WithColumn("EmailName").AsString(100).NotNullable()
                .WithColumn("EmailText").AsString(Int32.MaxValue).Nullable();

            Create.PrimaryKey("PK_Email").OnTable("Email").Columns(new string[] { "CompanyId", "EmailName" });
        }
    }
}
