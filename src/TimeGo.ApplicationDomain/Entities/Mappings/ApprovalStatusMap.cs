using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity.ModelConfiguration;

namespace TimeGo.ApplicationDomain.Entities.Mappings
{
    public class ApprovalStatusMap : EntityTypeConfiguration<ApprovalStatus>
    {
        public ApprovalStatusMap()
        {
            ToTable("ApprovalStatus");

            HasKey(x => x.Id);
            Property(x => x.Id).HasDatabaseGeneratedOption(DatabaseGeneratedOption.Identity);

            Property(x => x.ApprovalStatusType)
                .HasMaxLength(50);

            HasMany(x => x.TimeoffRequests)
                .WithRequired(x => x.ApprovalStatus)
                .WillCascadeOnDelete(false);

            HasMany(x => x.Timesheet)
                .WithRequired(x => x.ApprovalStatus)
                .WillCascadeOnDelete(false);

            HasMany(x => x.TimesheetLine)
                .WithRequired(x => x.ApprovalStatus)
                .WillCascadeOnDelete(false);
        }
    }
}
