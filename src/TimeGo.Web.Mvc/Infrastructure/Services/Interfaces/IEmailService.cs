namespace TimeGo.Web.Mvc.Infrastructure.Services.Interfaces
{
    public interface IEmailService
    {
        void SendWelcomeEmail();
        void SendConfirmEmail();
    }
}
