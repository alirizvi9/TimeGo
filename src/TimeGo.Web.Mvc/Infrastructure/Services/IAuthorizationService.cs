using System.Collections.Generic;
using System.Security.Claims;
using TimeGo.ApplicationDomain.Entities;
using TimeGo.Web.Mvc.Models;

namespace TimeGo.Web.Mvc.Infrastructure.Services
{
    public interface IAuthorizationService
    {
        Employee GetUser(IEnumerable<Claim> claims);
        AuthorizationResponse Authorization(string login, string password, long companyId);
    }
}
