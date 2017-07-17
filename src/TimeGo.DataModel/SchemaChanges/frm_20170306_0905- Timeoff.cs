using FluentMigrator;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TimeGo.DataModel.SchemaChanges
{
    [Migration(201703060905)]
    public class frm_20170306_0905 : AutoReversingMigration {
        public override void Up() {
            Alter.Table("TimeoffRequests")
                .AlterColumn("FromDate").AsDateTime().NotNullable()
                .AlterColumn("ToDate").AsDateTime().NotNullable()
                .AddColumn("ReturningToWork").AsDateTime().NotNullable();

        }
    }
}
