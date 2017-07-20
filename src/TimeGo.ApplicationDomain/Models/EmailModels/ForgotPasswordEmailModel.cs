using TimeGo.Data;

namespace TimeGo.ApplicationDomain.Models.EmailModels
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
