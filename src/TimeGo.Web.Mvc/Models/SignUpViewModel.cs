using System.ComponentModel.DataAnnotations;
using TimeGo.ApplicationDomain.Enums;

namespace TimeGo.Web.Mvc.Models
{
    public class SignUpViewModel
    {
        public SignUpViewModel()
        {
            Weekdays = Weekdays.Monday;
        }

        [Required(ErrorMessageResourceName = "FieldIsRequired", ErrorMessageResourceType = typeof(Resource))]
        public string CompanyName { get; set; }

        [Required(ErrorMessageResourceName = "FieldIsRequired", ErrorMessageResourceType = typeof(Resource))]
        public string FullName { get; set; }

        [Required(ErrorMessageResourceName = "FieldIsRequired", ErrorMessageResourceType = typeof(Resource))]
        [DataType(DataType.PhoneNumber, ErrorMessageResourceName = "PhoneNumberNotValid", ErrorMessageResourceType = typeof(Resource))]
        public string PhoneNumber { get; set; }

        [Required(ErrorMessageResourceName = "FieldIsRequired", ErrorMessageResourceType = typeof(Resource))]
        [DataType(DataType.EmailAddress, ErrorMessageResourceName = "EmailNotValid", ErrorMessageResourceType = typeof(Resource))]
        [RegularExpression("^.+@.+\\..+$", ErrorMessageResourceName = "EmailNotValid", ErrorMessageResourceType = typeof(Resource))]
        public string Email { get; set; }

        [Required(ErrorMessageResourceName = "FieldIsRequired", ErrorMessageResourceType = typeof(Resource))]
        [DataType(DataType.Password)]
        [StringLength(100, ErrorMessageResourceName = "PasswordLengthValid", ErrorMessageResourceType = typeof(Resource), MinimumLength = 9)]
        public string Password { get; set; }

        [Required(ErrorMessageResourceName = "FieldIsRequired", ErrorMessageResourceType = typeof(Resource))]
        [DataType(DataType.Password)]
        [Compare("Password", ErrorMessageResourceName = "PasswordConfirmFaild", ErrorMessageResourceType = typeof(Resource))]
        public string ConfirmPassword { get; set; }

        [Required(ErrorMessageResourceName = "FieldIsRequired", ErrorMessageResourceType = typeof(Resource))]
        public long TimezoneId { get; set; }

        [Required(ErrorMessageResourceName = "FieldIsRequired", ErrorMessageResourceType = typeof(Resource))]
        public Weekdays Weekdays { get; set; }

        [Required(ErrorMessageResourceName = "FieldIsRequired", ErrorMessageResourceType = typeof(Resource))]
        public string CompanyUrl { get; set; }
    }
}
