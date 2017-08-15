using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity.ModelConfiguration;

namespace TimeGo.ApplicationDomain.Entities.Mappings
{
    public class EmailMap : EntityTypeConfiguration<Email>
    {
        public EmailMap()
        {
            ToTable("Email");

            HasKey(x => x.Id);
            Property(x => x.Id).HasDatabaseGeneratedOption(DatabaseGeneratedOption.Identity);

            Property(x => x.EmailName).HasMaxLength(100);
            Property(x => x.EmailText);
        }
    }
}
