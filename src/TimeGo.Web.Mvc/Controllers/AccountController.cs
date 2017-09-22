using System.Web.Mvc;
using AutoMapper;
using TimeGo.Web.Mvc.Models;
using TimeGo.ApplicationDomain.Models;
using TimeGo.Web.Mvc.Infrastructure.Services;
using TimeGo.ApplicationDomain.Enums;
using TimeGo.ApplicationDomain.Services;
using System;
using System.Web.UI.WebControls;
using System.Collections.Generic;
using TimeGo.ApplicationDomain.Models.Users;

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
            ViewBag.Weekdays = GetWeekDays();
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
            ViewBag.Weekdays = GetWeekDays();

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
        [Route("SignUpInvite")]
        public ActionResult SignUpInvite(string token)
        {
            if (Company == null || string.IsNullOrEmpty(token))
                return RedirectToAction("SignUp");
            ViewBag.CompanyName = Company.CompanyName;
            var email = _authorizationService.GetInviteEmail(token);
            var model = new SignUpEmployee() { Email = email };
            return View(model);
        }

        [HttpPost]
        [AllowAnonymous]
        [Route("SignUpInvite")]
        public ActionResult SignUpInvite(SignUpEmployee model)
        {
            if (!ModelState.IsValid)
            {
                return View(model);
            }
            if (Company == null)
                return RedirectToAction("SignUp");
            var newEmployee = Mapper.Map<AddEmployeeViewModel>(model);
            var error = _accountService.AddEmployee(newEmployee, Company);
            if (error != ErrorCodes.Success)
            {
                if (error == ErrorCodes.EmailAlreadyExists)
                    ModelState.AddModelError<SignUpEmployee>(x => x.Email, Resource.EmailAlreadyExist);
                return View(model);
            }
            return RedirectToAction("CompanyLogin");
        }

        private SelectList GetWeekDays()
        {
            Array values = Enum.GetValues(typeof(Weekdays));
            List<ListItem> items = new List<ListItem>(values.Length);

            foreach (var i in values)
            {
                items.Add(new ListItem
                {
                    Text = Enum.GetName(typeof(Weekdays), i),
                    Value = ((int)i).ToString()
                });
            }

            return new SelectList(items);
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
                ModelState.AddModelError("", Resource.LoginError);
                return View(model);
            }
            Session["token"] = tokenModel.Token;
            Session["role"] = tokenModel.Employee.Role.RoleType;
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
                return RedirectToAction("ForgotPasswordConfirmation");
            }

            return View(model);
        }

        [AllowAnonymous]
        [Route("account/ForgotConfirm")]
        public ActionResult ForgotPasswordConfirmation()
        {
            return View();
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

        [AllowAnonymous]
        [Route("account/logout")]
        public ActionResult Logout()
        {
            Session["token"] = null;
            Session["role"] = null;
            return RedirectToAction("CompanyLogin");
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