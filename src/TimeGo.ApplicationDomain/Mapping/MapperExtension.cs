using System;
using System.Linq;
using AutoMapper;

namespace TimeGo.ApplicationDomain.Mapping
{
    public static class MapperExtension
    {
        public static TDestination Map<TDestination>(params object[] sources) where TDestination : class
        {
            if (sources == null)
                throw new ArgumentNullException(nameof(sources));

            if (!sources.Any())
                return default(TDestination);

            var initialSource = sources[0];
            var mappingResult = Map<TDestination>(initialSource);

            if (sources.Count() > 1)
                Map(mappingResult, sources.Skip(1).ToArray());

            return mappingResult;
        }

        private static void Map(object destination, params object[] sources)
        {
            if (!sources.Any())
                return;

            var destinationType = destination.GetType();
            foreach (var source in sources)
            {
                var sourceType = source.GetType();
                Mapper.Map(source, destination, sourceType, destinationType);
            }
        }

        private static TDestination Map<TDestination>(object source) where TDestination : class
        {
            var destinationType = typeof(TDestination);
            var sourceType = source.GetType();

            var mappingResult = Mapper.Map(source, sourceType, destinationType);

            return mappingResult as TDestination;
        }
    }
}