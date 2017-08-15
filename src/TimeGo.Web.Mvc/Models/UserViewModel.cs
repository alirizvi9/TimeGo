using TimeGo.ApplicationDomain.Entities;

namespace TimeGo.Web.Mvc.Models
{
    public class UserViewModel : BaseViewModel {
        public Employee Employee { get; set; }
    }
}