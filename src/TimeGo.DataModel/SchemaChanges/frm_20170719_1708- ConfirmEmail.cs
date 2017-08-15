using FluentMigrator;

namespace TimeGo.DataModel.SchemaChanges
{
    [Migration(201707191708)]
    public class frm_20170719_1708 : AutoReversingMigration {
        public override void Up()
        {
            Alter.Table("Employee")
                .AddColumn("ConfirmEmail").AsBoolean().Nullable()
                .AddColumn("Code").AsString(100).Nullable();
        }
    }
}


