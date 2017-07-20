using AutoMapper;
using TimeGo.ApplicationDomain.Models.ViewModels;

namespace TimeGo.Web.Mvc
{
    public class AutoMappingProfile : Profile
    {
        public AutoMappingProfile()
        {
            this.CreateMap<SignUpViewModel, SignUpModel>().ReverseMap();
        }
    }
}
