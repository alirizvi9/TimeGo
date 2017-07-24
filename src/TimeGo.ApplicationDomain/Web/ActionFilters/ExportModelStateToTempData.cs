using System.Web.Mvc;

namespace TimeGo.ApplicationDomain.Web.ActionFilters
{
    public class ExportModelStateToTempData : ModelStateTempDataTransfer
    {
        public override void OnResultExecuting(ResultExecutingContext filterContext)
        {
            if (!filterContext.Controller.ViewData.ModelState.IsValid)
            {
                if ((filterContext.Result is RedirectResult) || (filterContext.Result is RedirectToRouteResult))
                {
                    filterContext.Controller.TempData[Key] = filterContext.Controller.ViewData.ModelState;
                }
            }
            base.OnResultExecuting(filterContext);
        }


        public void OnException(ExceptionContext filterContext)
        {
            if (!filterContext.Controller.ViewData.ModelState.IsValid)
            {
                if ((filterContext.Result is RedirectResult) || (filterContext.Result is RedirectToRouteResult))
                {
                    filterContext.Controller.TempData[Key] = filterContext.Controller.ViewData.ModelState;
                }
            }
        }
    }
}