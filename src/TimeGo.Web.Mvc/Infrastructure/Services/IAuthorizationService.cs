using TimeGo.ApplicationDomain.Entities;
using TimeGo.Web.Mvc.Models;

namespace TimeGo.Web.Mvc.Infrastructure.Services
{
    public interface IAuthorizationService
    {
        Employee GetUser();
        AuthorizationResponse Authorization(string login, string password, long companyId);
        string GetInviteToken(string email);
        string GetInviteEmail(string token);
    }
}
