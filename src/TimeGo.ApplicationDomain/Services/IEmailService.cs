using TimeGo.Data;

namespace TimeGo.ApplicationDomain
{
    public interface IEmailService
    {
        void SendWelcomeEmail(Employee user);
        void SendConfirmEmail(Employee user, string code);
        void SendForgotPasswordEmail(Employee user, string code);
    }
}
