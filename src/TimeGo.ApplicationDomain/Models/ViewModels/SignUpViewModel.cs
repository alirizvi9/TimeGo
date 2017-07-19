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
        [DataType(DataType.PhoneNumber, ErrorMessage = "Phone number is not valid")]
        public string PhoneNumber { get; set; }

        [Required]
        [DataType(DataType.EmailAddress, ErrorMessage = "Email address is not valid")]
        public string Email { get; set; }

        [Required]
        [DataType(DataType.Password)]
        [StringLength(100, ErrorMessage = "The {0} must be at least {2} characters long.", MinimumLength = 9)]
        public string Password { get; set; }

        [Required]
        [DataType(DataType.Password)]
        [System.Web.Mvc.Compare("Password", ErrorMessage = "The password and confirmation password do not match.")]
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
