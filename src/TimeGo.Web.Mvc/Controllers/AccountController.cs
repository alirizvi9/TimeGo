using System.Linq;
using System.Threading.Tasks;
using System.Web.Mvc;
using TimeGo.Web.Mvc.Models;
using TimeGo.Data;
using TimeGo.ApplicationDomain;
using TimeGo.Web.Mvc.Services;
using TimeGo.ApplicationDomain.Models.ViewModels;
using AutoMapper;

namespace TimeGo.Web.Mvc.Controllers
{
    [Authorize]
    public class AccountController : BaseController
    {
        private IAccountService _accountService;
        private IAuthorizationService _authorizationService;

        public AccountController(ICompanyService companyService, IAccountService accountService, IAuthorizationService authorizationService, TimeGoSettings settings) :base(companyService, settings)
        {
            _accountService = accountService;
            _authorizationService = authorizationService;
        }

        [AllowAnonymous]
        public ActionResult SignUp()
        {
            SignUpViewModel Model = new SignUpViewModel();

            Model.Timezones = _accountService.GetTimeZones().Select(f => new SelectListItem
            {
                Value = f.TimezoneId.ToString(),
                Text = f.TimezoneName
            });

            return View(Model);
        }

        [HttpPost]
        [AllowAnonymous]
        public ActionResult SignUp(SignUpViewModel model)
        {
            if (!ModelState.IsValid)
            {
                model.Timezones = _accountService.GetTimeZones().Select(f => new SelectListItem
                {
                    Value = f.TimezoneId.ToString(),
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
                    Value = f.TimezoneId.ToString(),
                    Text = f.TimezoneName
                });
                return View(model);
            }
            return RedirectToSubDomain(model.CompanyURL);
        }

        [AllowAnonymous]
        public ActionResult CompanyLogin()
        {
            if (Company == null)
                return RedirectToAction("SignUp");
            ViewBag.CompanyName = Company.CompanyName;
            return View();
        }

        [HttpPost]
        [AllowAnonymous]
        public ActionResult CompanyLogin(LoginViewModel model, string returnUrl)
        {
            if (!ModelState.IsValid)
            {
                return View(model);
            }
            var company = Company;
            if(Company == null)
                return RedirectToAction("SignUp");
            var tokenModel = _authorizationService.Authorization(model.Email, model.Password, Company.CompanyId);
            if(tokenModel == null)
            {
                AddError(new ViewError() { Name = "Email", Message = Resource.LoginError });
                return View(model);
            }
            return RedirectToAction("Index", "Home");
        }

        //
        // GET: /Account/ConfirmEmail
        [AllowAnonymous]
        public async Task<ActionResult> ConfirmEmail(string userId, string code)
        {
            _accountService.ConfirmEmail(int.Parse(userId), code);
            return View();
        }

        //
        // GET: /Account/ForgotPassword
        [AllowAnonymous]
        public ActionResult ForgotPassword()
        {
            return View();
        }

        [AllowAnonymous]
        public ActionResult ForgotPasswordConfirmation()
        {
            return View();
        }

        //
        // POST: /Account/ForgotPassword
        [HttpPost]
        [AllowAnonymous]
        public async Task<ActionResult> ForgotPassword(ForgotPasswordViewModel model)
        {
            if (ModelState.IsValid)
            {
                var error = _accountService.ForgotPassword(model.Email);
                if(error != null)
                {
                    AddError(error);
                }
                else
                {
                    return RedirectToAction("ForgotPasswordConfirmation");
                }
            }

            return View(model);
        }

        [AllowAnonymous]
        public ActionResult ResetPassword(string userId, string code)
        {
            return View(new ResetPasswordViewModel() { UserId = userId, Code = code});
        }

        [HttpPost]
        [AllowAnonymous]
        public async Task<ActionResult> ResetPassword(ResetPasswordViewModel model)
        {
            if (ModelState.IsValid)
            {
                _accountService.ResetPassword(int.Parse(model.UserId), model.Code, model.Password);
                return RedirectToAction("CompayLogin");
            }

            return View(model);
        }

        private ActionResult RedirectToLocal(string returnUrl)
        {
            if (Url.IsLocalUrl(returnUrl))
            {
                return Redirect(returnUrl);
            }
            return RedirectToAction("Index", "Home");
        }
    }
}