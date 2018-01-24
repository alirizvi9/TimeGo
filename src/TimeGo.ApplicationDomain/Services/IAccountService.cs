using System.Collections.Generic;
using TimeGo.ApplicationDomain.Entities;
using TimeGo.ApplicationDomain.Enums;
using TimeGo.ApplicationDomain.Models;
using TimeGo.ApplicationDomain.Models.Users;

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
        ErrorCodes AddEmployee(AddEmployeeViewModel model, Employee user);
        ErrorCodes AddEmployee(AddEmployeeViewModel model, Company company);
        ErrorCodes InviteEmployee(InviteEmployeeViewModel model, Employee user);
        ErrorCodes ReInviteEmployee(long id, Employee user);
        ErrorCodes EditEmployee(UsersListItemViewModel employee, Employee user);
        AddEmployeeViewModel GetEmployee(string email);
    }
}
