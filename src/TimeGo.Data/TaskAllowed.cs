using System.ComponentModel.DataAnnotations.Schema;

namespace TimeGo.Data
{
    [Table("TaskAllowed")]
    public class TaskAllowed
    {
        public int TaskAllowedId { get; set; }

        public int? TaskId { get; set; }

        public int? EmployeeId { get; set; }

        public bool? IsActive { get; set; }

        public virtual Employee Employee { get; set; }

        public virtual Task Task { get; set; }
    }
}
