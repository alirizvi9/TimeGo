using TimeGo.Data;

namespace TimeGo.Web.Mvc.Models
{
    public class AuthorizationResponse
    {
        public Employee Employee { get; set; }
        public string Token { get; set; }
    }
}