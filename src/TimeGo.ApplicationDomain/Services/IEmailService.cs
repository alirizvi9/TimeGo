namespace TimeGo.ApplicationDomain
{
    public interface IEmailService
    {
        void SendWelcomeEmail();
        void SendConfirmEmail();
    }
}
