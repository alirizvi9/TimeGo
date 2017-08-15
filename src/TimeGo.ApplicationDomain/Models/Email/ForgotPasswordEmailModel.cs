using TimeGo.ApplicationDomain.Entities;

namespace TimeGo.ApplicationDomain.Models.Email
{
    public class ForgotPasswordEmailModel : BaseEmailModel
    {
        public ForgotPasswordEmailModel(Employee user, TimeGoSettings settings, string url) : base(user, settings)
        {
            Url = url;
        }

        public string Url { get; set; }
    }
}
