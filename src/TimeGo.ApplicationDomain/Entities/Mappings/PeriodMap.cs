using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity.ModelConfiguration;

namespace TimeGo.ApplicationDomain.Entities.Mappings
{
    public class PeriodMap : EntityTypeConfiguration<Period>
    {
        public PeriodMap()
        {
            ToTable("Period");

            HasKey(x => x.Id);
            Property(x => x.Id).HasDatabaseGeneratedOption(DatabaseGeneratedOption.Identity);

            HasRequired(x => x.Company)
                .WithMany(x => x.Period)
                .WillCascadeOnDelete(false);

            HasRequired(x => x.Employee)
                .WithMany(x => x.Period)
                .WillCascadeOnDelete(false);

            HasMany(x => x.Timesheet)
                .WithRequired(x => x.Period)
                .WillCascadeOnDelete(false);
        }
    }
}
