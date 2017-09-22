using TimeGo.ApplicationDomain.Entities;

namespace TimeGo.ApplicationDomain.Services
{
    public interface IEmailService
    {
        void SendWelcomeEmail(Employee user);
        void SendConfirmEmail(Employee user, string code);
        void SendForgotPasswordEmail(Employee user, string code);
        void SendInviteEmail(string token, string subdomen, string email);
    }
}
