using AutoMapper;
using TimeGo.ApplicationDomain.Entities;
using TimeGo.ApplicationDomain.Mapping;
using TimeGo.Web.Mvc.Areas.Admin.Models;

namespace TimeGo.Web.Mvc.Infrastructure.Mapping
{
    public class EditCompanyMapper : AutoMapperBaseMapper<Company, EditCompanyViewModel>
    {
        protected override void Configure(IMappingExpression<Company, EditCompanyViewModel> cfg)
        {
            cfg.ForMember(x => x.CompanyName, m => m.MapFrom(x => x.CompanyName));
        }
    }

    public class EditCompanyResultMapper : AutoMapperBaseMapper<EditCompanyViewModel, Company>
    {
        protected override void Configure(IMappingExpression<EditCompanyViewModel, Company> cfg)
        {
            cfg.ForMember(x => x.CompanyName, m => m.MapFrom(x => x.CompanyName));
        }
    }
}