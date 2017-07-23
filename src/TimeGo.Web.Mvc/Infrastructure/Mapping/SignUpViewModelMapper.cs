using AutoMapper;
using TimeGo.ApplicationDomain.Mapping;
using TimeGo.ApplicationDomain.Models;
using TimeGo.Web.Mvc.Models;

namespace TimeGo.Web.Mvc.Infrastructure.Mapping
{
    public class SignUpViewModelMapper : AutoMapperBaseMapper<SignUpViewModel, SignUpModel>
    {
        protected override void Configure(IMappingExpression<SignUpViewModel, SignUpModel> cfg)
        {
            cfg
                .ForMember(x => x.CompanyName, m => m.MapFrom(x => x.CompanyName));
        }
    }
}