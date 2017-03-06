using FluentMigrator;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TimeGo.DataModel.SchemaChanges
{
    [Migration(201702251222)]
    public class frm_20170225_1222 : AutoReversingMigration {
        public override void Up() {
            Execute.Sql(@"update Employee set LoginMethodId=1 where LoginMethodId is null;");
        }
    }
}
