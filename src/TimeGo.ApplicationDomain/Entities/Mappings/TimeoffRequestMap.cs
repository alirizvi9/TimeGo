using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity.ModelConfiguration;

namespace TimeGo.ApplicationDomain.Entities.Mappings
{
    public class TimeoffRequestMap : EntityTypeConfiguration<TimeoffRequest>
    {
        public TimeoffRequestMap()
        {
            ToTable("TimeoffRequest");

            HasKey(x => x.Id);
            Property(x => x.Id).HasDatabaseGeneratedOption(DatabaseGeneratedOption.Identity);

            Property(x => x.Reason);

            HasRequired(x => x.ApprovalStatus)
                .WithMany(x => x.TimeoffRequests)
                .WillCascadeOnDelete(false);

            HasRequired(x => x.Company)
                .WithMany(x => x.TimeoffRequests)
                .WillCascadeOnDelete(false);

            HasRequired(x => x.Employee)
                .WithMany(x => x.TimeoffRequests)
                .WillCascadeOnDelete(false);

            HasRequired(x => x.ApprovedBy)
                .WithMany()
                .WillCascadeOnDelete(false);
        }
    }
}
