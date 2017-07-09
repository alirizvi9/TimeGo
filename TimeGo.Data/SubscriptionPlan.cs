using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace TimeGo.Data
{
    [Table("SubscriptionPlan")]
    public class SubscriptionPlan
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public SubscriptionPlan()
        {
            Company = new HashSet<Company>();
        }

        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int SubscriptionPlanId { get; set; }

        [StringLength(100)]
        public string SubscriptionPlanType { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Company> Company { get; set; }
    }
}
