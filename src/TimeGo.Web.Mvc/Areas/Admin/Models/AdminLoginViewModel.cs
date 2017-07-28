using System.ComponentModel.DataAnnotations;

namespace TimeGo.Web.Mvc.Areas.Admin.Models
{
    public class AdminLoginViewModel
    {
        [Required]
        [Display(Name = "Logn")]
        public string Login { get; set; }

        [Required]
        [DataType(DataType.Password)]
        [Display(Name = "Password")]
        public string Password { get; set; }
    }
}