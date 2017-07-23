using System;

namespace TimeGo.ApplicationDomain.Dependency.Ninject
{
    public class InjectableAttribute : Attribute
    {
        public InjectableAttribute()
        {
            Singleton = true;
        }

        public bool Singleton { get; set; }
    }
}