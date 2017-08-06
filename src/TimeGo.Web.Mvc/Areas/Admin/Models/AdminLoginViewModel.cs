using System.ComponentModel.DataAnnotations;

namespace TimeGo.Web.Mvc.Areas.Admin.Models
{
    public class AdminLoginViewModel
    {
        [Required(ErrorMessageResourceName = "FieldIsRequired", ErrorMessageResourceType = typeof(Resource))]
        [Display(Name = "Logn")]
        public string Login { get; set; }

        [Required(ErrorMessageResourceName = "FieldIsRequired", ErrorMessageResourceType = typeof(Resource))]
        [DataType(DataType.Password)]
        [Display(Name = "Password")]
        public string Password { get; set; }
    }
}