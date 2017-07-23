using System;
using System.Web.Mvc;
using TimeGo.Tests.Base.Controllers;
using TimeGo.Tests.Base.Database;
using TimeGo.Web.Mvc.Controllers;
using Xunit;

namespace TimeGo.Tests.Controllers
{
    public class AccountControllerTests : BaseControllerTest<AccountController>
    {
        public AccountControllerTests() : base()
        {

        }

        [Fact]
        public void AccountControllerShouldSignUp()
        {
            var view = CallAction<ViewResult>(x => x.SignUp());

            Assert.Equal("SignUp", view.ViewName);
        }
    }
}
