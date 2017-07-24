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

        [Required]
        public string CompanyName { get; set; }

        [Required]
        public string FullName { get; set; }

        [Required]
        [DataType(DataType.PhoneNumber, ErrorMessageResourceName = "PhoneNumberNotValid", ErrorMessageResourceType = typeof(Resource))]
        public string PhoneNumber { get; set; }

        [Required]
        [DataType(DataType.EmailAddress, ErrorMessageResourceName = "EmailNotValid", ErrorMessageResourceType = typeof(Resource))]
        public string Email { get; set; }

        [Required]
        [DataType(DataType.Password)]
        [StringLength(100, ErrorMessageResourceName = "PasswordLengthValid", ErrorMessageResourceType = typeof(Resource), MinimumLength = 9)]
        public string Password { get; set; }

        [Required]
        [DataType(DataType.Password)]
        [Compare("Password", ErrorMessageResourceName = "PasswordConfirmFaild", ErrorMessageResourceType = typeof(Resource))]
        public string ConfirmPassword { get; set; }

        [Required]
        public long TimezoneId { get; set; }

        [Required]
        public Weekdays Weekdays { get; set; }

        [Required]
        public string CompanyUrl { get; set; }
    }
}
