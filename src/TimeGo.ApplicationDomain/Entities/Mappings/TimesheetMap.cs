using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity.ModelConfiguration;

namespace TimeGo.ApplicationDomain.Entities.Mappings
{
    public class TimesheetMap : EntityTypeConfiguration<Timesheet>
    {
        public TimesheetMap()
        {
            ToTable("Timesheet");

            HasKey(x => x.Id);
            Property(x => x.Id).HasDatabaseGeneratedOption(DatabaseGeneratedOption.Identity);

            Property(x => x.EmployeeNotes);
            Property(x => x.ApproverNotes);

            HasRequired(x => x.ApprovalStatus)
                .WithMany(x => x.Timesheet)
                .WillCascadeOnDelete(false);

            HasRequired(x => x.Company)
                .WithMany(x => x.Timesheet)
                .WillCascadeOnDelete(false);

            HasRequired(x => x.RevisedBy)
                .WithMany()
                .WillCascadeOnDelete(false);

            HasRequired(x => x.ApprovedBy)
                .WithMany()
                .WillCascadeOnDelete(false);

            HasRequired(x => x.LockStatus)
                .WithMany(x => x.Timesheet)
                .WillCascadeOnDelete(false);

            HasRequired(x => x.Period)
                .WithMany(x => x.Timesheet)
                .WillCascadeOnDelete(false);

            HasMany(x => x.TimesheetLines)
                .WithRequired(x => x.Timesheet)
                .WillCascadeOnDelete();
        }
    }
}
