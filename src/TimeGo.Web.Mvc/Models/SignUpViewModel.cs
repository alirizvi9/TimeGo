using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Web.Mvc;

namespace TimeGo.ApplicationDomain.Models.ViewModels
{
    public class SignUpViewModel
    {
        public SignUpViewModel()
        {
            WorkweekStaryDay = WorkWeek.Monday;
        }

        [Required]
        public new string CompanyName { get; set; }

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
        [System.Web.Mvc.Compare("Password", ErrorMessageResourceName = "PasswordConfirmFaild", ErrorMessageResourceType = typeof(Resource))]
        public string ConfirmPassword { get; set; }

        [Required]
        public int TimezoneId { get; set; }

        [Required]
        public WorkWeek WorkweekStaryDay { get; set; }

        [Required]
        public new string CompanyURL { get; set; }

        public IEnumerable<SelectListItem> Timezones { get; set; }
    }
}
