using System.Web.Mvc;
using AutoMapper;
using TimeGo.Web.Mvc.Models;
using TimeGo.ApplicationDomain.Models;
using TimeGo.Web.Mvc.Infrastructure.Services;
using TimeGo.ApplicationDomain.Enums;
using TimeGo.ApplicationDomain.Services;

namespace TimeGo.Web.Mvc.Controllers
{
    [Authorize]
    public class AccountController : BaseController
    {
        private readonly IAccountService _accountService;
        private readonly IAuthorizationService _authorizationService;

        public AccountController(
            IAccountService accountService,
            IAuthorizationService authorizationService)
        {
            _accountService = accountService;
            _authorizationService = authorizationService;
        }

        [AllowAnonymous]
        [Route("signup")]
        public ActionResult SignUp()
        {
            ViewBag.Timezones = _accountService
                .GetTimeZones()
                .ToSelectList(x => x.Id, x => x.TimezoneName);

            return View();
        }

        [HttpPost]
        [AllowAnonymous]
        [Route("signup")]
        public ActionResult SignUp(SignUpViewModel model)
        {
            ViewBag.Timezones = _accountService
                .GetTimeZones()
                .ToSelectList(x => x.Id, x => x.TimezoneName);

            if (!ModelState.IsValid)
            {
                return View(model);
            }
            var newUser = Mapper.Map<SignUpRequest>(model);
            var error = _accountService.SignUp(newUser);
            if(error != ErrorCodes.Success)
            {
                if(error == ErrorCodes.EmailAlreadyExists)
                    ModelState.AddModelError<SignUpViewModel>(x => x.Email, Resource.EmailAlreadyExist);
                if (error == ErrorCodes.CompanyAlreadyExists)
                    ModelState.AddModelError<SignUpViewModel>(x => x.CompanyUrl, Resource.UrlAlreadyExist);
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
        public ActionResult CompanyLogin(LoginViewModel model)
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
                ModelState.AddModelError<LoginViewModel>(x => x.Email, Resource.LoginError);
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
            if (!ModelState.IsValid)
                return View(model);

            var error = _accountService.ForgotPassword(model.Email);

            if (error != ErrorCodes.Success)
            {
                if (error == ErrorCodes.NotFoundEmail)
                    ModelState.AddModelError<ForgotPasswordViewModel>(x => x.Email, Resource.NotFounEmail);
            }
            else
            {
                return RedirectToAction("ForgotPassword");
            }

            return View(model);
        }

        [AllowAnonymous]
        [Route("account/reset")]
        public ActionResult ResetPassword(string userId, string code)
        {
            return View(new ResetPasswordViewModel {
                UserId = userId,
                Code = code
            });
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
    }
}