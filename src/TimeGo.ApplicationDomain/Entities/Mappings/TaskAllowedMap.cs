using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity.ModelConfiguration;

namespace TimeGo.ApplicationDomain.Entities.Mappings
{
    public class TaskAllowedMap : EntityTypeConfiguration<TaskAllowed>
    {
        public TaskAllowedMap()
        {
            ToTable("TaskAllowed");

            HasKey(x => x.Id);
            Property(x => x.Id).HasDatabaseGeneratedOption(DatabaseGeneratedOption.Identity);

            HasRequired(x => x.Employee)
                .WithMany(x => x.TaskAllowed)
                .WillCascadeOnDelete(false);

            HasRequired(x => x.Task)
                .WithMany(x => x.TaskAllowed)
                .WillCascadeOnDelete(false);
        }
    }
}
