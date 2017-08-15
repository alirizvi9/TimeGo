using System.Collections.Generic;
using TimeGo.ApplicationDomain.Domain;

namespace TimeGo.ApplicationDomain.Entities
{
    public class CompanyApproved : Entity<CompanyApproved, long>
    {
        public CompanyApproved()
        {
            Company = new HashSet<Company>();
        }

        public string CompanyApprovedType { get; set; }
        public virtual ICollection<Company> Company { get; set; }
    }
}
