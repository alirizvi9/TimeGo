using TimeGo.ApplicationDomain.Enums;

namespace TimeGo.ApplicationDomain.Models.ViewModels
{
    public class SignUpModel
    {
        public SignUpModel()
        {
            WorkweekStaryDay = Weekdays.Monday;
        }
        public new string CompanyName { get; set; }
        
        public string FullName { get; set; }
        
        public string PhoneNumber { get; set; }
        
        public string Email { get; set; }
        
        public string Password { get; set; }
        
        public string ConfirmPassword { get; set; }
        
        public int TimezoneId { get; set; }
        
        public Weekdays WorkweekStaryDay { get; set; }
        
        public new string CompanyURL { get; set; }
    }
}
