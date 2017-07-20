using TimeGo.Data;

namespace TimeGo.ApplicationDomain.Models.EmailModels
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
