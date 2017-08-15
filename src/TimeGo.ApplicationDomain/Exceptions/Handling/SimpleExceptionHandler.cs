using System;
using System.Web.Mvc;

namespace TimeGo.ApplicationDomain.Exceptions.Handling
{
    public class SimpleExceptionHandler<T> : ExceptionHandler where T : Exception
    {
        private readonly Func<T, ActionResult> _handler;

        public SimpleExceptionHandler(Func<T, ActionResult> handler)
            : base(ex => ex is T)
        {
            _handler = handler;
        }

        public SimpleExceptionHandler(Func<T, bool> test, Func<T, ActionResult> handler)
            : base(ex => ex is T && test((T)ex))
        {
            _handler = handler;
        }

        public override ActionResult Handle(Exception ex)
        {
            return _handler((T)ex);
        }
    }
}