using System.Collections.Generic;
using TimeGo.ApplicationDomain.Domain;

namespace TimeGo.ApplicationDomain.Entities
{
    public class Timezone : Entity<Timezone, long>
    {
        public Timezone()
        {
            Company = new HashSet<Company>();
        }

        public string TimezoneName { get; set; }
        public virtual ICollection<Company> Company { get; set; }
    }
}
