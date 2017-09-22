using System.Collections.Generic;

namespace TimeGo.ApplicationDomain.Models.Task
{
    public class TaskViewModel
    {
        public long Id { get; set; }
        public string TaskName { get; set; }
        public bool IsActive { get; set; }
        public string ApproverPrimary { get; set; }
        public string ApproverSecondary { get; set; }
        public List<AllowUser> Allows { get; set; }
    }

    public class AllowUser
    {
        public long UserId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public bool Allow { get; set; }
    }
}
