
namespace TimeGo.ApplicationDomain.Models.CompanyProfile
{
    public class CompanyProfileViewModel
    {
        public long Id { get; set; }
        public string CompanyName { get; set; }
        public string ContactName { get; set; }
        public string PhoneNumber { get; set; }
        public string EmailAddress { get; set; }
        public string VacationApproverEmail { get; set; }
        public int? WorkWeekStartDay { get; set; }
        public long? TimesheetsWeeks { get; set; }
        public string TimeGoUrl { get; set; }
    }
}