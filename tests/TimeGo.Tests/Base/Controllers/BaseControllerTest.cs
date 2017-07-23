using System;
using System.Collections.Generic;
using System.Configuration;
using System.Reflection;
using System.Web.Mvc;
using Ninject;
using TimeGo.ApplicationDomain.Dependency.Ninject;
using TimeGo.ApplicationDomain.Domain;
using TimeGo.Tests.Base.Database;
using TimeGo.Tests.Base.Helpers;
using TimeGo.Web.Mvc;
using TimeGo.Web.Mvc.Infrastructure.Dependency;

namespace TimeGo.Tests.Base.Controllers
{
    public class BaseControllerTest<T> : BaseDatabaseOrientedControllerTest<T> where T : Controller
    {
        protected override NinjectComponentContainer CreateNinjectComponentContainer()
        {
            var settings = TestDataHelper.GetSettings();

            Kernel = new StandardKernel(new CoreModule(settings));

            return new NinjectComponentContainer(Kernel, new[] {
                typeof(TimeGoApplication).Assembly,
                typeof(Entity<,>).Assembly,
            });
        }

        protected override IEnumerable<Assembly> GetAutoMapperMaggingsAssemblies()
        {
            return new[] { typeof(TimeGoApplication).Assembly };
        }

        protected override IDbSetUp GetDbSetup()
        {
            var cs = ConfigurationManager.ConnectionStrings["TimeGoEntities"];
            if (cs == null)
                throw new ArgumentException("Connection string TestDb is not defined");

            var type = Type.GetType(ConfigurationManager.AppSettings["DbSetUpType"]);
            if (type == null)
                throw new ArgumentException("DbSetUpType");

            var connectionString = cs.ConnectionString;
            return (IDbSetUp)Activator.CreateInstance(type, connectionString);
        }

        //protected void SetCurrentUser(Employee employee)
        //{
        //    var mockContext = Mock.Get(Controller.HttpContext);
        //    mockContext.Setup(x => x.).Returns(new GenericPrincipal(new GenericIdentity(employee.EmailAddress), new string[0]));
        //    var mockRequest = Mock.Get(Controller.HttpContext.Request);
        //    mockRequest.Setup(x => x.IsAuthenticated).Returns(true);
        //}

        //protected void MockIpAddress(string ip)
        //{
        //    var mockRequest = Mock.Get(Controller.Request);
        //    var variables = new NameValueCollection { { "X_FORWARDED_FOR", "" } };
        //    mockRequest.SetupGet(x => x.UserHostAddress).Returns(ip);
        //    mockRequest.SetupGet(x => x.ServerVariables).Returns(variables);
        //}
    }
}
