using Microsoft.Owin.Security;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using TimeGo.ApplicationDomain;
using TimeGo.Data;
using TimeGo.Web.Mvc.Models;

namespace TimeGo.Web.Mvc.Services.Implementation
{
    public class AuthorizationService : IAuthorizationService
    {
        private readonly TimeGoEntities _context;
        private readonly TimeGoSettings _configuration;

        public AuthorizationService(TimeGoEntities context, TimeGoSettings configuration)
        {
            _context = context;
            _configuration = configuration;
        }

        public Employee GetUser(IEnumerable<Claim> claims)
        {
            var id = Convert.ToInt64(claims.Where(c => c.Type == ClaimTypes.NameIdentifier).Select(c => c.Value).SingleOrDefault());
            var user = _context.Employees.SingleOrDefault(x => x.EmployeeId == id);
            return user;
        }

        public AuthorizationResponse Authorization(string login, string password, int companyId)
        {
            var employee = _context.Employees.SingleOrDefault(e => e.CompanyId == companyId && e.IsActive == true && (e.EmailAddress == login || e.UserName == login) && e.Password == password);
            if (employee != null)
            {
                var claims = new List<Claim>
                {
                    new Claim(ClaimTypes.Name, employee.EmailAddress ?? string.Empty),
                    new Claim(ClaimTypes.Role, employee.RoleId.ToString()),
                    new Claim(ClaimTypes.NameIdentifier, employee.EmployeeId.ToString()),
                    new Claim(ClaimTypes.Email, employee.EmailAddress ?? string.Empty)
                };

                var identity = new ClaimsIdentity(claims, OwinConfig.OAuthOptions.AuthenticationType);
                var ticket = new AuthenticationTicket(identity, new AuthenticationProperties());
                var result = new AuthorizationResponse
                {
                    Employee = employee,
                    Token = OwinConfig.OAuthOptions.AccessTokenFormat.Protect(ticket)
                };
                return result;
            }
            return null;
        }
    }
}
