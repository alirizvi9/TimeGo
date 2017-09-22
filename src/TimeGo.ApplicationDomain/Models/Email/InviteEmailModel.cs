namespace TimeGo.ApplicationDomain.Models.Email
{
    public class InviteEmailModel : BaseEmailModel
    {
        public string Url { get; set; }
        public InviteEmailModel(string url, string email, TimeGoSettings settings)
        {
            Url = url;
            SendFrom = settings.EmailFrom;
            SendFromName = settings.EmailFromName;
            SendTo = email;
            SendToName = email;
            ReplyTo = string.Empty;
        }
    }
}
