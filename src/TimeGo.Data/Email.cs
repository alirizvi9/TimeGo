using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace TimeGo.Data
{
    [Table("Email")]
    public class Email
    {
        [Key]
        [Column(Order = 0)]
        public int CompanyId { get; set; }

        [Key]
        [Column(Order = 1)]
        [StringLength(100)]
        public string EmailName { get; set; }

        public string EmailText { get; set; }
    }
}
