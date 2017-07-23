using AutoMapper;

namespace TimeGo.ApplicationDomain.Mapping
{
    public abstract class AutoMapperBaseMapper<TSource, TDestination> : IMapper
    {
        public void Register()
        {
            new MapperConfiguration(x => Configure(x.CreateMap<TSource, TDestination>()));
        }

        protected virtual void Configure(IMappingExpression<TSource, TDestination> cfg)
        {
        }
    }
}