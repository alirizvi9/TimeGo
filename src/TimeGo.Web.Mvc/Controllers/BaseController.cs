using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Web.Mvc;
using TimeGo.ApplicationDomain;
using TimeGo.ApplicationDomain.Dependency;
using TimeGo.ApplicationDomain.Entities;
using TimeGo.ApplicationDomain.Enums;
using TimeGo.ApplicationDomain.Exceptions.Handling;
using TimeGo.ApplicationDomain.Models;
using TimeGo.ApplicationDomain.Services;
using TimeGo.ApplicationDomain.Web.ActionFilters;
using TimeGo.ApplicationDomain.Web.ActionResults;

namespace TimeGo.Web.Mvc.Controllers
{
    public class BaseController : Controller
    {
        private readonly ICompanyService _companyService;
        protected readonly IHttpContextProvider ContextProvider;
        protected readonly TimeGoSettings Settings;

        public BaseController()
        {
            _companyService = Get.Component<ICompanyService>();
            ContextProvider = Get.Component<IHttpContextProvider>();
            Settings = Get.Component<TimeGoSettings>();
        }

        public Company Company => _companyService.GetCompanyFromUrl(ContextProvider.GetHttpRequest().Url.AbsoluteUri);

        public ActionResult RedirectToSubDomain(string subdomain, string route = "")
        {
            var url = string.Format(Settings.SieUrlForSubdomen, subdomain) + route;
            return Redirect(url);
        }

        //protected void AddErrors(IdentityResult result)
        //{
        //    foreach (var error in result.Errors)
        //    {
        //        ModelState.AddModelError("", error);
        //    }
        //}

        #region Handlers

        private readonly List<ExceptionHandler> _handlers = new List<ExceptionHandler>();

        protected void HandleException<T>(Func<T, ActionResult> handler) where T : Exception
        {
            _handlers.Add(new SimpleExceptionHandler<T>(handler));
        }

        //TODO: See if we can find a better, cleaner solution to handle post exception model state exporting to temp data.
        private ExportModelStateToTempData _filter;

        protected override void OnActionExecuted(ActionExecutedContext filterContext)
        {
            base.OnActionExecuted(filterContext);
            if (filterContext.Exception == null || filterContext.ExceptionHandled)
                return;

            var filter = (ExportModelStateToTempData)filterContext.ActionDescriptor
                .GetCustomAttributes(typeof(ExportModelStateToTempData), true).SingleOrDefault();
            if (filter == null)
                return;
            _filter = filter;
        }

        protected override void OnException(ExceptionContext filterContext)
        {
            base.OnException(filterContext);
            if (filterContext.ExceptionHandled)
                return;
            var handler = _handlers.FirstOrDefault(ex => ex.CanHandle(filterContext.Exception));

            filterContext.ExceptionHandled = true;
            if (handler != null)
                filterContext.Result = handler.Handle(filterContext.Exception);
            _filter?.OnException(filterContext);
        }

        #endregion

        protected override JsonResult Json(object data, string contentType, Encoding contentEncoding, JsonRequestBehavior behavior)
        {
            return new JsonNetResult
            {
                Data = data,
                ContentType = contentType,
                ContentEncoding = contentEncoding,
                JsonRequestBehavior = behavior
            };
        }
    }
}