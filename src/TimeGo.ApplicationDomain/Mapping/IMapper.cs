using AutoMapper.Configuration;

namespace TimeGo.ApplicationDomain.Mapping
{
    public interface IMapper
    {
        void Register(MapperConfigurationExpression cfg);
    }
}