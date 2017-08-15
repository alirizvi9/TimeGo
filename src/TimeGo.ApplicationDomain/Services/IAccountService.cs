using System.Collections.Generic;
using TimeGo.ApplicationDomain.Entities;
using TimeGo.ApplicationDomain.Enums;
using TimeGo.ApplicationDomain.Models;

namespace TimeGo.ApplicationDomain.Services
{
    public interface IAccountService
    {
        ErrorCodes SignUp(SignUpRequest model);
        List<Timezone> GetTimeZones();
        List<SubscriptionPlan> GetSubscriptionPlans();
        List<CompanyApproved> GetCompanyApproves();
        ErrorCodes ForgotPassword(string email);
        void ResetPassword(int userId, string code, string password);
        void ConfirmEmail(int userId, string code);
    }
}
