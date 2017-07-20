using TimeGo.Data;

namespace TimeGo.ApplicationDomain
{
    public class BaseEmailModel
    {
        public BaseEmailModel() { }

        public BaseEmailModel(Employee user, TimeGoSettings settings)
        {
            SendFrom = settings.EmailFrom;
            SendFromName = settings.EmailFromName;
            SendTo = user.EmailAddress;
            SendToName = user.FirstName;
            ReplyTo = string.Empty;
        }

        public string SendFrom { get; set; }
        public string SendTo { get; set; }
        public string ReplyTo { get; set; }
        public string SendFromName { get; set; }
        public string SendToName { get; set; }
        public string ReplyToName { get; set; }
        public string Subject { get; set; }
    }
}