using FluentMigrator;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TimeGo.DataModel.SchemaChanges
{
    [Migration(201703192158)]
    public class frm_20170319_2158 : AutoReversingMigration {
        public override void Up() {
            //*************************************************************************
            //  Task
            //*************************************************************************
            Alter.Table("TimeoffRequests").AlterColumn("Reason").AsString(Int32.MaxValue).Nullable();
            Alter.Table("Timesheet").AlterColumn("EmployeeNotes").AsString(Int32.MaxValue).Nullable();
            Alter.Table("Timesheet").AlterColumn("ApproverNotes").AsString(Int32.MaxValue).Nullable();
        }
    }
}
