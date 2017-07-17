using FluentMigrator;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TimeGo.DataModel.SchemaChanges
{
    [Migration(201702231009)]
    public class frm_20170223_1009 : AutoReversingMigration {
        public override void Up() {
            Alter.Table("Employee")
                .AddColumn("Phonenumber").AsString(100).Nullable()
                .AddColumn("LoginMethodId").AsInt32().Nullable().WithDefaultValue(1);
        }
    }
}
