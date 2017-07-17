using FluentMigrator;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TimeGo.DataModel.SchemaChanges
{
    [Migration(201703051056)]
    public class frm_20170305_1056 : AutoReversingMigration {
        public override void Up() {
            //*************************************************************************
            //  Timesheet
            //*************************************************************************
            Alter.Table("TimesheetLine")
                .AlterColumn("StartTime").AsDateTime().NotNullable()
                .AlterColumn("EndTime").AsDateTime().NotNullable();
        }
    }
}
