using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity.ModelConfiguration;

namespace TimeGo.ApplicationDomain.Entities.Mappings
{
    public class EmployeeMap : EntityTypeConfiguration<Employee>
    {
        public EmployeeMap()
        {
            ToTable("Employee");

            HasKey(x => x.Id);
            Property(x => x.Id).HasDatabaseGeneratedOption(DatabaseGeneratedOption.Identity);

            Property(x => x.EmployeeNumber).HasMaxLength(50);
            Property(x => x.UserName).HasMaxLength(50);
            Property(x => x.FirstName).HasMaxLength(100);
            Property(x => x.LastName).HasMaxLength(100);
            Property(x => x.EmailAddress).HasMaxLength(100);
            Property(x => x.Password).HasMaxLength(100);
            Property(x => x.PhoneNumber).HasMaxLength(50);
            Property(x => x.SocialSecurityNumber).HasMaxLength(25);
            Property(x => x.Code).HasMaxLength(25);

            HasRequired(x => x.Company)
                .WithMany(x => x.Employee)
                .WillCascadeOnDelete(false);

            HasRequired(x => x.Role)
                .WithMany(x => x.Employee)
                .WillCascadeOnDelete(false);

            HasMany(x => x.EmployeeRates)
                .WithRequired(x => x.Employee)
                .WillCascadeOnDelete(false);

            HasMany(x => x.Period)
                .WithRequired(x => x.Employee)
                .WillCascadeOnDelete(false);

            HasMany(x => x.TaskAllowed)
                .WithRequired(x => x.Employee)
                .WillCascadeOnDelete(false);

            HasMany(x => x.TimeoffRequests)
                .WithRequired(x => x.Employee)
                .WillCascadeOnDelete(false);

            HasMany(x => x.Timesheets)
                .WithRequired(x => x.Employee)
                .WillCascadeOnDelete(false);
        }
    }
}
