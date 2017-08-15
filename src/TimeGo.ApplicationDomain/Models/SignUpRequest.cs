using TimeGo.ApplicationDomain.Enums;

namespace TimeGo.ApplicationDomain.Models
{
    public class SignUpRequest
    {
        public SignUpRequest()
        {
            WorkweekStaryDay = Weekdays.Monday;
        }
        public string CompanyName { get; set; }
        
        public string FullName { get; set; }
        
        public string PhoneNumber { get; set; }
        
        public string Email { get; set; }
        
        public string Password { get; set; }
        
        public string ConfirmPassword { get; set; }
        
        public long TimezoneId { get; set; }
        
        public Weekdays WorkweekStaryDay { get; set; }
        
        public string CompanyUrl { get; set; }
    }
}
