using TimeGo.ApplicationDomain.Enums;

namespace TimeGo.Web.Mvc.Areas.Admin.Models
{
    public class EditCompanyViewModel
    {
        public long Id { get; set; }
        public string CompanyName { get; set; }
        public string EmailAddress { get; set; }
        public string ContactName { get; set; }
        public string BillingAddressLine1 { get; set; }
        public string BillingAddressLine2 { get; set; }
        public string BillingAddressCity { get; set; }
        public string BillingAddressState { get; set; }
        public string BillingAddressZip { get; set; }
        public string BillingAddressCountry { get; set; }
        public long TimezoneId { get; set; }
        public Weekdays WorkweekStaryDay { get; set; }
        public string PhoneNumber { get; set; }
        public string TimeGoUrl { get; set; }
        public long CompanyApprovedId { get; set; }
        public long SubscriptionPlanId { get; set; }
    }
}