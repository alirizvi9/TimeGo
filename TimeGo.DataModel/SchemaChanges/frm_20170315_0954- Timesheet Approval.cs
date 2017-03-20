using FluentMigrator;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TimeGo.DataModel.SchemaChanges
{
    [Migration(201703150954)]
    public class frm_20170315_0954 : AutoReversingMigration {
        public override void Up() {
            //*************************************************************************
            //  Task
            //*************************************************************************
            Create.ForeignKey("fk_Employee_Task1").FromTable("Task").ForeignColumn("Approver1Id").ToTable("Employee").PrimaryColumn("EmployeeId");
            Create.ForeignKey("fk_Employee_Task2").FromTable("Task").ForeignColumn("Approver2Id").ToTable("Employee").PrimaryColumn("EmployeeId");
        }
    }
}
