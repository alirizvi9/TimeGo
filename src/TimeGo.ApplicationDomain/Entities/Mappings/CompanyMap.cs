using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity.ModelConfiguration;

namespace TimeGo.ApplicationDomain.Entities.Mappings
{
    public class CompanyMap : EntityTypeConfiguration<Company>
    {
        public CompanyMap()
        {
            ToTable("Company");

            HasKey(x => x.Id);
            Property(x => x.Id).HasDatabaseGeneratedOption(DatabaseGeneratedOption.Identity);

            Property(x => x.CompanyName).HasMaxLength(100);
            Property(x => x.ContactName).HasMaxLength(100);
            Property(x => x.PhoneNumber).HasMaxLength(100);
            Property(x => x.EmailAddress).HasMaxLength(100);
            Property(x => x.TimeGoUrl).HasMaxLength(100);
            Property(x => x.BillingAddressLine1).HasMaxLength(100);
            Property(x => x.BillingAddressLine2).HasMaxLength(100);
            Property(x => x.BillingAddressCity).HasMaxLength(100);
            Property(x => x.BillingAddressState).HasMaxLength(100);
            Property(x => x.BillingAddressZip).HasMaxLength(12);
            Property(x => x.BillingAddressCountry).HasMaxLength(100);
            Property(x => x.RegistrationCode).HasMaxLength(100);

            HasRequired(x => x.Timezone)
                .WithMany(x => x.Company)
                .WillCascadeOnDelete(false);

            HasRequired(x => x.CompanyApproved)
                .WithMany(x => x.Company)
                .WillCascadeOnDelete(false);

            HasRequired(x => x.SubscriptionPlan)
                .WithMany(x => x.Company)
                .WillCascadeOnDelete(false);

            HasMany(x => x.Employee)
                .WithRequired(x => x.Company)
                .WillCascadeOnDelete(false);

            HasMany(x => x.Period)
                .WithRequired(x => x.Company)
                .WillCascadeOnDelete(false);

            HasMany(x => x.Task)
                .WithRequired(x => x.Company)
                .WillCascadeOnDelete(false);

            HasMany(x => x.TimeoffRequests)
                .WithRequired(x => x.Company)
                .WillCascadeOnDelete(false);

            HasMany(x => x.Timesheet)
                .WithRequired(x => x.Company)
                .WillCascadeOnDelete(false);
        }
    }
}
