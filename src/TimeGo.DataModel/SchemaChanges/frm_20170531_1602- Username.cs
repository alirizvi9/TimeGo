using FluentMigrator;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TimeGo.DataModel.SchemaChanges
{
    [Migration(201705311602)]
    public class frm_20170531_1602 : AutoReversingMigration {
        public override void Up() {
            //*************************************************************************
            //  CompanyApproved
            //*************************************************************************
            Alter.Table("Employee")
                .AddColumn("UserName").AsString(100).Nullable();
        }
    }
}
