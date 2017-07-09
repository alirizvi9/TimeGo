using System.Linq;
using System.Web.Mvc;
using TimeGo.ApplicationDomain.Persistance;
using TimeGo.ApplicationDomain.Web.Attributes;

namespace TimeGo.ApplicationDomain.Web.ActionFilters
{
    public class UnitOfWorkFilter : IActionFilter, IExceptionFilter
    {
        private readonly IUnitOfWorkProvider _unitOfWorkProvider;
        private bool _actionExecuted;
        private IUnitOfWork _uow;

        public UnitOfWorkFilter(IUnitOfWorkProvider unitOfWorkProvider)
        {
            _unitOfWorkProvider = unitOfWorkProvider;
        }

        public void OnActionExecuting(ActionExecutingContext filterContext)
        {
            var attribute = filterContext.ActionDescriptor
                .GetCustomAttributes(typeof (IsolationLevelAttribute), false)
                .Cast<IsolationLevelAttribute>()
                .SingleOrDefault();

            _uow = attribute != null ? 
                _unitOfWorkProvider.BeginUnitOfWork(attribute.IsolationLevel) :
                _unitOfWorkProvider.BeginUnitOfWork();
        }

        public void OnActionExecuted(ActionExecutedContext filterContext)
        {
            if (filterContext.Exception != null || _uow == null) return;

            _uow.Success();
            _uow.Dispose();
            _actionExecuted = true;
        }

        public void OnException(ExceptionContext filterContext)
        {
            if (_actionExecuted || _uow == null) return;

            _uow.Fail();
            _uow.Dispose();
        }
    }
}