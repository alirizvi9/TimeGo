using TimeGo.ApplicationDomain.Entities;

namespace TimeGo.ApplicationDomain.Models.Email
{
    public class ConfirmEmailModel : BaseEmailModel
    {
        public ConfirmEmailModel(Employee user, TimeGoSettings settings, string url): base(user, settings)
        {
            Url = url;
        }

        public string Url { get; set; }
    }
}
