using FluentMigrator;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TimeGo.DataModel.SchemaChanges
{
    [Migration(201706182134)]
    public class frm_20170618_2134 : AutoReversingMigration {
        public override void Up() {
            //*************************************************************************
            //  CompanyApproved
            //*************************************************************************
            Alter.Table("Company")
                .AddColumn("WorkweekStaryDay").AsInt32().Nullable()
                .AddColumn("TimezoneId").AsInt32().Nullable();

            Create.Table("Timezone")
                .WithColumn("TimezoneId").AsInt32().Identity().PrimaryKey().NotNullable()
                .WithColumn("TimezoneName").AsString(100).Nullable();

            Create.ForeignKey("fk_Timezone_Company").FromTable("Company").ForeignColumn("TimezoneId").ToTable("Timezone").PrimaryColumn("TimezoneId");

            Insert.IntoTable("Timezone").Row(new { TimezoneName = "Eastern Standard Time" });
            Insert.IntoTable("Timezone").Row(new { TimezoneName = "Central Standard Time" });
            Insert.IntoTable("Timezone").Row(new { TimezoneName = "Mountain Standard Time" });
            Insert.IntoTable("Timezone").Row(new { TimezoneName = "Pacific Standard Time" });

            Insert.IntoTable("Timezone").Row(new { TimezoneName = "US Eastern Standard Time" });
            Insert.IntoTable("Timezone").Row(new { TimezoneName = "US Mountain Standard Time" });

            Insert.IntoTable("Timezone").Row(new { TimezoneName = "Hawaiian Standard Time" });
            Insert.IntoTable("Timezone").Row(new { TimezoneName = "Alaskan Standard Time" });
        }
    }
}


