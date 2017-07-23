using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity.ModelConfiguration;

namespace TimeGo.ApplicationDomain.Entities.Mappings
{
    public class EmployeeRateMap : EntityTypeConfiguration<EmployeeRate>
    {
        public EmployeeRateMap()
        {
            ToTable("EmployeeRate");

            HasKey(x => x.Id);
            Property(x => x.Id).HasDatabaseGeneratedOption(DatabaseGeneratedOption.Identity);

            HasRequired(x => x.Company)
                .WithMany()
                .WillCascadeOnDelete(false);

            HasRequired(x => x.Employee)
                .WithMany(x => x.EmployeeRates)
                .WillCascadeOnDelete(false);
        }
    }
}
