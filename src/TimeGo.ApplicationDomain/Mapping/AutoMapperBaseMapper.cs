using AutoMapper;
using AutoMapper.Configuration;

namespace TimeGo.ApplicationDomain.Mapping
{
    public abstract class AutoMapperBaseMapper<TSource, TDestination> : IMapper
    {
        public void Register(MapperConfigurationExpression cfg)
        {
            Configure(cfg.CreateMap<TSource, TDestination>());
        }

        protected virtual void Configure(IMappingExpression<TSource, TDestination> cfg)
        {
        }
    }
}