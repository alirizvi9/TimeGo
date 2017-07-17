using FluentMigrator;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TimeGo.DataModel.SchemaChanges
{
    [Migration(201702272000)]
    public class frm_20170227_2000 : AutoReversingMigration {
        public override void Up() {
            //*************************************************************************
            //  CompanyApproved
            //*************************************************************************
            Create.Table("UserRates")
                .WithColumn("RateId").AsInt32().PrimaryKey().NotNullable()
                .WithColumn("CompanyId").AsInt32().Nullable()
                .WithColumn("EmployeeId").AsInt32().Nullable()
                .WithColumn("EffectiveStartDate").AsDateTime().NotNullable()
                .WithColumn("EffectiveEndDate").AsDateTime().Nullable()
                .WithColumn("RateAmount").AsFloat().NotNullable()
                .WithColumn("UpdatedById").AsInt32().Nullable()
                .WithColumn("UpdatedOn").AsDateTime().Nullable();
        }
    }
}
