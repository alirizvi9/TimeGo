using System.Linq;
using System.Web.Mvc;
using AutoMapper;
using TimeGo.Web.Mvc.Models;
using TimeGo.ApplicationDomain;
using TimeGo.ApplicationDomain.Models;
using TimeGo.Web.Mvc.Infrastructure.Services;

namespace TimeGo.Web.Mvc.Controllers
{
    [Authorize]
    public class AccountController : BaseController
    {
        private readonly IAccountService _accountService;
        private readonly IAuthorizationService _authorizationService;

        public AccountController(
            ICompanyService companyService,
            IAccountService accountService,
            IAuthorizationService authorizationService,
            TimeGoSettings settings)
        {
            _accountService = accountService;
            _authorizationService = authorizationService;
        }

        [AllowAnonymous]
        [Route("signup")]
        public ActionResult SignUp()
        {
            var model = new SignUpViewModel
            {
                Timezones = _accountService.GetTimeZones()
                    .Select(f => new SelectListItem
                    {
                        Value = f.Id.ToString(),
                        Text = f.TimezoneName
                    })
            };
            return View(model);
        }

        [HttpPost]
        [AllowAnonymous]
        [Route("signup")]
        public ActionResult SignUp(SignUpViewModel model)
        {
            if (!ModelState.IsValid)
            {
                model.Timezones = _accountService.GetTimeZones().Select(f => new SelectListItem
                {
                    Value = f.Id.ToString(),
                    Text = f.TimezoneName
                });
                return View(model);
            }
            var newUser = Mapper.Map<SignUpModel>(model);
            var error = _accountService.SignUp(newUser);
            if(error != null)
            {
                AddError(error);
                model.Timezones = _accountService.GetTimeZones().Select(f => new SelectListItem
                {
                    Value = f.Id.ToString(),
                    Text = f.TimezoneName
                });
                return View(model);
            }
            return RedirectToSubDomain(model.CompanyUrl);
        }

        [AllowAnonymous]
        [Route("")]
        [Route("login")]
        public ActionResult CompanyLogin()
        {
            if (Company == null)
                return RedirectToAction("SignUp");

            ViewBag.CompanyName = Company.CompanyName;
            return View();
        }

        [HttpPost]
        [AllowAnonymous]
        [Route("login")]
        public ActionResult CompanyLogin(LoginViewModel model, string returnUrl)
        {
            if (!ModelState.IsValid)
            {
                return View(model);
            }

            if(Company == null)
                return RedirectToAction("SignUp");

            var tokenModel = _authorizationService.Authorization(model.Email, model.Password, Company.Id);
            if(tokenModel == null)
            {
                AddError(new ViewError { Name = "Email", Message = Resource.LoginError });
                return View(model);
            }
            return RedirectToAction("Run", "App");
        }

        [AllowAnonymous]
        [Route("account/confirm")]
        public ActionResult ConfirmEmail(string userId, string code)
        {
            _accountService.ConfirmEmail(int.Parse(userId), code);
            return View();
        }

        [AllowAnonymous]
        [Route("account/forgot")]
        public ActionResult ForgotPassword()
        {
            return View();
        }

        [HttpPost]
        [AllowAnonymous]
        [Route("account/forgot")]
        public ActionResult ForgotPassword(ForgotPasswordViewModel model)
        {
            if (ModelState.IsValid)
            {
                var error = _accountService.ForgotPassword(model.Email);
                if (error != null)
                {
                    AddError(error);
                }
                else
                {
                    return RedirectToAction("ForgotPassword");
                }
            }

            return View(model);
        }

        [AllowAnonymous]
        [Route("account/reset")]
        public ActionResult ResetPassword(string userId, string code)
        {
            return View(new ResetPasswordViewModel() { UserId = userId, Code = code});
        }

        [HttpPost]
        [AllowAnonymous]
        [Route("account/reset")]
        public ActionResult ResetPassword(ResetPasswordViewModel model)
        {
            if (ModelState.IsValid)
            {
                _accountService.ResetPassword(int.Parse(model.UserId), model.Code, model.Password);
                return RedirectToAction("CompanyLogin");
            }

            return View(model);
        }

        //private ActionResult RedirectToLocal(string returnUrl)
        //{
        //    if (Url.IsLocalUrl(returnUrl))
        //    {
        //        return Redirect(returnUrl);
        //    }
        //    return RedirectToAction("Run", "App");
        //}
    }
}