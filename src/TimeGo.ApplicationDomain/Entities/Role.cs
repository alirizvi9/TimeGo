using System.Collections.Generic;
using TimeGo.ApplicationDomain.Domain;

namespace TimeGo.ApplicationDomain.Entities
{
    public class Role : Entity<Role, long>
    {
        public Role()
        {
            Employee = new HashSet<Employee>();
        }

        public string RoleType { get; set; }
        public virtual ICollection<Employee> Employee { get; set; }
    }
}
