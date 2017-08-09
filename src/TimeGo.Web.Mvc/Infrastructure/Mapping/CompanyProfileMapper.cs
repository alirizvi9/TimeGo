using AutoMapper;
using TimeGo.ApplicationDomain.Entities;
using TimeGo.ApplicationDomain.Mapping;
using TimeGo.ApplicationDomain.Models.CompanyProfile;

namespace TimeGo.Web.Mvc.Infrastructure.Mapping
{
    public class CompanyProfileMapper : AutoMapperBaseMapper<Company, CompanyProfileViewModel>
    {
        protected override void Configure(IMappingExpression<Company, CompanyProfileViewModel> cfg)
        {
            cfg.ForMember(x => x.WorkWeekStartDay, m => m.MapFrom(x => x.WorkweekStaryDay));
            cfg.ForMember(x => x.TimesheetsWeeks, m => m.MapFrom(x => x.TimePeriodsInFuture));
        }
    }
}