using System;
using System.Transactions;
using System.Web.Mvc;

namespace TimeGo.ApplicationDomain.Web.Attributes
{
    [AttributeUsage(AttributeTargets.Class|AttributeTargets.Method, Inherited = true, AllowMultiple = false)]
    public class IsolationLevelAttribute : ActionFilterAttribute 
    {
        public IsolationLevel IsolationLevel { get; }

        public IsolationLevelAttribute(IsolationLevel isolationLevel)
        {
            IsolationLevel = isolationLevel;
        }
    }
}