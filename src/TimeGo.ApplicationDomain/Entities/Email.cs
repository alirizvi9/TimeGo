using TimeGo.ApplicationDomain.Domain;

namespace TimeGo.ApplicationDomain.Entities
{
    public class Email : Entity<Email, long>
    {
        public string EmailName { get; set; }
        public string EmailText { get; set; }
    }
}
