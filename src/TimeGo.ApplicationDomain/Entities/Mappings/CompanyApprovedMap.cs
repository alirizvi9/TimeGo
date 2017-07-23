using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity.ModelConfiguration;

namespace TimeGo.ApplicationDomain.Entities.Mappings
{
    public class CompanyApprovedMap : EntityTypeConfiguration<CompanyApproved>
    {
        public CompanyApprovedMap()
        {
            ToTable("CompanyApproved");

            HasKey(x => x.Id);
            Property(x => x.Id).HasDatabaseGeneratedOption(DatabaseGeneratedOption.Identity);

            Property(x => x.CompanyApprovedType).HasMaxLength(100);

            HasMany(x => x.Company)
                .WithRequired(x => x.CompanyApproved)
                .WillCascadeOnDelete(true);
        }
    }
}
