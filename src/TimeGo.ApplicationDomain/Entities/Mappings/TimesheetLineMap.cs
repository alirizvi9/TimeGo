using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity.ModelConfiguration;

namespace TimeGo.ApplicationDomain.Entities.Mappings
{
    public class TimesheetLineMap : EntityTypeConfiguration<TimesheetLine>
    {
        public TimesheetLineMap()
        {
            ToTable("TimesheetLine");

            HasKey(x => x.Id);
            Property(x => x.Id).HasDatabaseGeneratedOption(DatabaseGeneratedOption.Identity);

            HasRequired(x => x.ApprovalStatus)
                .WithMany(x => x.TimesheetLine)
                .WillCascadeOnDelete(false);

            HasRequired(x => x.RevisedBy)
                .WithMany()
                .WillCascadeOnDelete(false);

            HasRequired(x => x.ApprovedBy)
                .WithMany()
                .WillCascadeOnDelete(false);

            HasRequired(x => x.LockStatus)
                .WithMany(x => x.TimesheetLine)
                .WillCascadeOnDelete(false);
        }
    }
}
