using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity.ModelConfiguration;

namespace TimeGo.ApplicationDomain.Entities.Mappings
{
    public class TimezoneMap : EntityTypeConfiguration<Timezone>
    {
        public TimezoneMap()
        {
            ToTable("Timezone");

            HasKey(x => x.Id);
            Property(x => x.Id).HasDatabaseGeneratedOption(DatabaseGeneratedOption.Identity);

            Property(x => x.TimezoneName).HasMaxLength(50);

            HasMany(x => x.Company)
                .WithRequired(x => x.Timezone)
                .WillCascadeOnDelete(false);
        }
    }
}
