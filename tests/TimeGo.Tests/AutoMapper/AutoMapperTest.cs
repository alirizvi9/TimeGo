using System.Collections.Generic;
using System.Reflection;
using AutoMapper;
using TimeGo.ApplicationDomain.Mapping;
using TimeGo.Web.Mvc;
using Xunit;

namespace TimeGo.Tests.AutoMapper
{
    public class AutoMapperTest
    {
        public AutoMapperTest()
        {
            var autoMapperAssemblies = GetAutoMapperAssemblies();
            foreach (var autoMapperAssembly in autoMapperAssemblies)
            {
                var assembly = autoMapperAssembly;
                AutoMapperMapRegistry.RegisterAllMappings(x => x.Include(assembly));
            }
        }

        protected IEnumerable<Assembly> GetAutoMapperAssemblies()
        {
            return new[] { typeof(TimeGoApplication).Assembly };
        }

        [Fact]
        public void TestAutoMapperMappings()
        {
            Mapper.AssertConfigurationIsValid();
        }
    }
}
