using System;
using TimeGo.ApplicationDomain.Entities;
using TimeGo.ApplicationDomain.Persistance;
using TimeGo.Tests.Base.Facotries;

namespace TimeGo.Tests.Factories
{
    public class TimezoneFactory : BaseFactory<Timezone>
    {
        public TimezoneFactory(IRepository repository)
            : base(repository)
        {
        }

        protected override Timezone CreateNew()
        {
            return new Timezone
            {
                TimezoneName = "Timezone " + Counter,
                CreatedOn = DateTime.UtcNow
            };
        }
    }
}
