using System.Collections.Generic;
using System.Security.Claims;
using TimeGo.Data;
using TimeGo.Web.Mvc.Models;

namespace TimeGo.Web.Mvc.Services
{
    public interface IAuthorizationService
    {
        Employee GetUser(IEnumerable<Claim> claims);
        AuthorizationResponse Authorization(string login, string password, int companyId);
    }
}
