using System;
using System.Web.Mvc;

namespace TimeGo.ApplicationDomain.Exceptions.Handling
{
    public abstract class ExceptionHandler
    {
        private readonly Func<Exception, bool> _test;

        protected ExceptionHandler(Func<Exception, bool> test)
        {
            _test = test;
        }

        public bool CanHandle(Exception ex)
        {
            return _test(ex);
        }

        public abstract ActionResult Handle(Exception ex);
    }
}