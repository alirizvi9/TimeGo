using TimeGo.ApplicationDomain.Domain;

namespace TimeGo.ApplicationDomain.Entities
{
    public class TaskAllowed : Entity<TaskAllowed, long>
    {
        public long? TaskId { get; set; }
        public long? EmployeeId { get; set; }
        public bool IsActive { get; set; }
        public virtual Employee Employee { get; set; }
        public virtual Task Task { get; set; }
    }
}
