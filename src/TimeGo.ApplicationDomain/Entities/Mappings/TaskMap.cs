using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity.ModelConfiguration;

namespace TimeGo.ApplicationDomain.Entities.Mappings
{
    public class TaskMap : EntityTypeConfiguration<Task>
    {
        public TaskMap()
        {
            ToTable("Task");

            HasKey(x => x.Id);
            Property(x => x.Id).HasDatabaseGeneratedOption(DatabaseGeneratedOption.Identity);

            Property(x => x.TaskName).HasMaxLength(100);

            HasRequired(x => x.Company)
                .WithMany(x => x.Task)
                .WillCascadeOnDelete(false);

            HasOptional(x => x.ApproverPrimary)
                .WithMany()
                .WillCascadeOnDelete(false);

            HasOptional(x => x.ApproverSecondary)
                .WithMany()
                .WillCascadeOnDelete(false);

            HasMany(x => x.TaskAllowed)
                .WithRequired(x => x.Task)
                .WillCascadeOnDelete(false);
        }
    }
}
