using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity.ModelConfiguration;

namespace TimeGo.ApplicationDomain.Entities.Mappings
{
    public class LockStatusMap : EntityTypeConfiguration<LockStatus>
    {
        public LockStatusMap()
        {
            ToTable("LockStatus");

            HasKey(x => x.Id);
            Property(x => x.Id).HasDatabaseGeneratedOption(DatabaseGeneratedOption.Identity);

            Property(x => x.LockStatusType).HasMaxLength(25);

            HasMany(x => x.Timesheet)
                .WithRequired(x => x.LockStatus)
                .WillCascadeOnDelete(false);
        }
    }
}
