using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity.ModelConfiguration;

namespace TimeGo.ApplicationDomain.Entities.Mappings
{
    public class SubscriptionPlanMap : EntityTypeConfiguration<SubscriptionPlan>
    {
        public SubscriptionPlanMap()
        {
            ToTable("SubscriptionPlan");

            HasKey(x => x.Id);
            Property(x => x.Id).HasDatabaseGeneratedOption(DatabaseGeneratedOption.Identity);

            Property(x => x.SubscriptionPlanType).HasMaxLength(25);

            HasMany(x => x.Company)
                .WithRequired(x => x.SubscriptionPlan)
                .WillCascadeOnDelete(false);
        }
    }
}
