using AutoMapper;
using TimeGo.ApplicationDomain.Entities;
using TimeGo.ApplicationDomain.Mapping;
using TimeGo.ApplicationDomain.Models.Users;

namespace TimeGo.Web.Mvc.Infrastructure.Mapping
{
    public class UsersMapper : AutoMapperBaseMapper<Employee, UsersListItemViewModel>
    {
        protected override void Configure(IMappingExpression<Employee, UsersListItemViewModel> cfg)
        {
            cfg.BeforeMap((s, d) =>
            {
                s.SocialSecurityNumber = string.IsNullOrEmpty(s.SocialSecurityNumber) ? "" : s.SocialSecurityNumber.Substring(s.SocialSecurityNumber.Length - 4);
            });
            cfg.ForMember(x => x.Last4Ss, m => m.MapFrom(x => x.SocialSecurityNumber));
            cfg.ForMember(x => x.Email, m => m.MapFrom(x => x.EmailAddress));
            cfg.ForMember(x => x.Phone, m => m.MapFrom(x => x.PhoneNumber));
        }
    }
}