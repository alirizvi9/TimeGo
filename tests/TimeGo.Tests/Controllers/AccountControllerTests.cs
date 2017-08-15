using System;
using System.Linq;
using System.Web.Mvc;
using TimeGo.ApplicationDomain.Entities;
using TimeGo.ApplicationDomain.Enums;
using TimeGo.Tests.Base.Controllers;
using TimeGo.Tests.Base.Facotries;
using TimeGo.Web.Mvc.Controllers;
using TimeGo.Web.Mvc.Models;
using Xunit;

namespace TimeGo.Tests.Controllers
{
    public class AccountControllerTests : BaseControllerTest<AccountController>
    {
        [Fact]
        public void AccountControllerSignUpShouldShowView()
        {
            var view = CallAction<ViewResult>(x => x.SignUp());

            Assert.NotNull(view);
        }

        [Fact]
        public void AccountControllerShouldShowView()
        {
            Timezone timezone = null;
            InUnitOfWork(() =>
            {
                timezone = Factory.Create<Timezone>();
            });

            var viewModel = new SignUpViewModel
            {
                CompanyName = "Test",
                PhoneNumber = "11111111",
                Password = "test",
                CompanyUrl = "abc",
                ConfirmPassword = "abc",
                Email = "john.dou@abc.com",
                FullName = "John Dou",
                Weekdays = Weekdays.Monday,
                TimezoneId = timezone.Id
            };

            var view = CallAction<ViewResult>(x => x.SignUp(viewModel));

            InUnitOfWork(() =>
            {
                var company = Find<Company>().SingleOrDefault(x => x.CompanyName == "Test");
                Assert.NotNull(company);
                Assert.Equal(viewModel.PhoneNumber, company.PhoneNumber);
            });
            Assert.NotNull(view);
        }
    }
}
