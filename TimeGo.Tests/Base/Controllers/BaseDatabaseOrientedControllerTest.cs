using System;
using System.Collections.Specialized;
using System.IO;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;
using Moq;
using TimeGo.ApplicationDomain.Dependency;

namespace TimeGo.Tests.Base.Controllers
{
    public abstract class BaseDatabaseOrientedControllerTest<TController> : BaseDatabaseOrientedTest where TController : Controller
    {
        private readonly Lazy<TController> _controller;
        protected TController Controller => _controller.Value;

        protected BaseDatabaseOrientedControllerTest()
        {
            _controller = new Lazy<TController>(GetController);

            var httpRequest = new HttpRequest(string.Empty, "http://uri.com", string.Empty);
            var writer = new StringWriter();
            var httpResponse = new HttpResponse(writer);
            HttpContext.Current = new HttpContext(httpRequest, httpResponse);
        }

        protected ActionResult CallAction(Func<TController, ActionResult> action)
        {
            ActionResult actionResult = null;
            InUnitOfWork(() => actionResult = action(Controller));
            return actionResult;
        }

        protected TResult CallAction<TResult>(Func<TController, ActionResult> action) where TResult : ActionResult
        {
            return (TResult) CallAction(action);
        }

        public TController GetController()
        {
            var controller = Get.Component<TController>();
            var httpContextMock = new Mock<HttpContextBase>();
            var requestContextMock = new Mock<HttpRequestBase>();
            var responseContextMock = new Mock<HttpResponseBase>();
            requestContextMock.SetupGet(x => x.Headers).Returns(new NameValueCollection());
            requestContextMock.SetupGet(x => x.Cookies).Returns(new HttpCookieCollection());
            requestContextMock.SetupGet(x => x.AcceptTypes).Returns(new[] { "text/html" });
            responseContextMock.SetupGet(x => x.Cookies).Returns(new HttpCookieCollection());
            httpContextMock.SetupGet(x => x.Request).Returns(requestContextMock.Object);
            httpContextMock.SetupGet(x => x.Response).Returns(responseContextMock.Object);
            controller.Url = new UrlHelper(new RequestContext(httpContextMock.Object, new RouteData()));
            controller.ControllerContext = new ControllerContext(controller.Url.RequestContext, controller);
            controller.ControllerContext.RouteData.Values.Add("controller", controller.GetType().Name.ToLower().Replace("controller", ""));
            ControllerSetUp(controller);
            return controller;
        }

        protected ExceptionContext CallOnException(Exception ex)
        {
            var exceptionContext = new ExceptionContext(Controller.ControllerContext, ex);
            ((IExceptionFilter) Controller).OnException(exceptionContext);
            return exceptionContext;
        }

        /// <summary>
        /// Set server variables for the request.
        /// Should call this method before do mocking, cause it's call instance the controller
        /// </summary>
        /// <param name="name">Server variable name</param>
        /// <param name="value">Server variable value</param>
        protected void SetServerVariables(string name, string value)
        {
            var mockRequest = Mock.Get(Controller.HttpContext.Request);
            mockRequest.Setup(x => x.ServerVariables).Returns(new NameValueCollection { { name, value } });
        }

        /// <summary>
        /// Set client IP address for the request.
        /// Should call this method before do mocking, cause it's call instance the controller.
        /// </summary>
        /// <param name="ipAddress">Client IP address for the request</param>
        protected void SetClientIpAddress(string ipAddress)
        {
            SetServerVariables("X_FORWARDED_FOR", ipAddress);
            var mockRequest = Mock.Get(Controller.HttpContext.Request);
            mockRequest.Setup(x => x.UserHostAddress).Returns(ipAddress);
        }

        /// <summary>
        /// Mark action call as json
        /// </summary>
        protected void MockJsonCall()
        {
            var controller = Controller;
            var requestMock = Mock.Get(controller.HttpContext.Request);
            requestMock.SetupGet(x => x.AcceptTypes).Returns(new[] { "application/json" });
        }

        protected void SetRequestParameter(string name, string value)
        {
            var requestMock = Mock.Get(Controller.HttpContext.Request);
            requestMock.SetupGet(x => x[name]).Returns(value);
        }

        protected virtual void ControllerSetUp(TController controller)
        {
        }
    }
}