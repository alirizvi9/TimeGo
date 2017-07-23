using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity.ModelConfiguration;

namespace TimeGo.ApplicationDomain.Entities.Mappings
{
    public class RoleMap : EntityTypeConfiguration<Role>
    {
        public RoleMap()
        {
            ToTable("Role");

            HasKey(x => x.Id);
            Property(x => x.Id).HasDatabaseGeneratedOption(DatabaseGeneratedOption.Identity);

            Property(x => x.RoleType).HasMaxLength(25);

            HasMany(x => x.Employee)
                .WithRequired(x => x.Role)
                .WillCascadeOnDelete(false);
        }
    }
}
