using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace TimeGo.Data
{
    [Table("CompanyApproved")]
    public class CompanyApproved
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public CompanyApproved()
        {
            Company = new HashSet<Company>();
        }

        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int CompanyApprovedId { get; set; }

        [StringLength(100)]
        public string CompanyApprovedType { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Company> Company { get; set; }
    }
}
