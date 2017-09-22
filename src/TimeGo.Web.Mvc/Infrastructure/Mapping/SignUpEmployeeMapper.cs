using AutoMapper;
using TimeGo.ApplicationDomain.Mapping;
using TimeGo.ApplicationDomain.Models.Users;
using TimeGo.Web.Mvc.Models;

namespace TimeGo.Web.Mvc.Infrastructure.Mapping
{
    public class SignUpEmployeeMapper : AutoMapperBaseMapper<SignUpEmployee, AddEmployeeViewModel>
    {
        protected override void Configure(IMappingExpression<SignUpEmployee, AddEmployeeViewModel> cfg)
        {
            cfg.ForMember(x => x.FirstName, m => m.MapFrom(x => x.FirstName));
        }
    }
}