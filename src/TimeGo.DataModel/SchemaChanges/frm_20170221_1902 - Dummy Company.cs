using FluentMigrator;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TimeGo.DataModel.SchemaChanges
{
    [Migration(201702211902)]
    public class frm_20170221_1902 : AutoReversingMigration {
        public override void Up() {
            Insert.IntoTable("Company").Row(new { CompanyName = "Ron Consulting", TimeGoURL = "reb" });
            Insert.IntoTable("Employee").Row(new { CompanyId = "1", EmployeeNumber = "1", FirstName = "Ron", LastName="Bibb", EmailAddress="ronbibb@gmail.com", Password="pass", SSN="1234"});
            Insert.IntoTable("Period").Row(new { CompanyId = "1", PeriodStart = "2017-01-01", PeriodEnd="2017-01-07" });
        }
    }
}
