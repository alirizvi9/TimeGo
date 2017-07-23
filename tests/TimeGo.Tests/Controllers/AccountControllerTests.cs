using System.Web.Mvc;
using TimeGo.Tests.Base.Controllers;
using TimeGo.Web.Mvc.Controllers;
using Xunit;

namespace TimeGo.Tests.Controllers
{
    public class AccountControllerTests : BaseControllerTest<AccountController>
    {
        [Fact]
        public void AccountControllerShouldSignUp()
        {
            var view = CallAction<ViewResult>(x => x.SignUp());

            Assert.NotNull(view);
        }
    }
}
