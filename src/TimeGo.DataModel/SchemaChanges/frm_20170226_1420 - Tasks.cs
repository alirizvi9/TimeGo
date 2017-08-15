using FluentMigrator;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TimeGo.DataModel.SchemaChanges
{
    [Migration(201702261420)]
    public class frm_20170226_1420 : AutoReversingMigration {
        public override void Up() {
            Alter.Table("TaskAllowed")
                .AddColumn("IsActive").AsBoolean().Nullable().WithDefaultValue(true);
        }
    }
}
