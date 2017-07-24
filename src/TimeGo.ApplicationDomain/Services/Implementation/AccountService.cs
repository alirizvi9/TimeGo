using System;
using System.Collections.Generic;
using System.Linq;
using FreeSurvey.Core.Extensions;
using TimeGo.ApplicationDomain.Entities;
using TimeGo.ApplicationDomain.Models;
using TimeGo.ApplicationDomain.Persistance;

namespace TimeGo.ApplicationDomain.Services.Implementation
{
    public class AccountService : IAccountService
    {
        private readonly IRepository _repository;
        private readonly IEmailService _emailService;

        public AccountService(IRepository repository, IEmailService emailService)
        {
            _repository = repository;
            _emailService = emailService;
        }

        public List<Timezone> GetTimeZones()
        {
            return _repository.Find<Timezone>().ToList();
        }

        public ViewError SignUp(SignUpModel model)
        {
            var company = _repository.Find<Company>().SingleOrDefault(x=>x.TimeGoUrl == model.CompanyUrl);
            if (company != null)
                return new ViewError() { Code = Enums.ErrorCodes.CompanyAlreadyExists};
            var user = _repository.Find<Employee>().SingleOrDefault(x => x.EmailAddress == model.Email);
            if(user != null)
                return new ViewError() { Code = Enums.ErrorCodes.EmailAlreadyExists };


            var companyApproved = _repository.Find<CompanyApproved>().First(x=>x.Id == 1);
            var subscriptionPlan = _repository.Find<SubscriptionPlan>().First(x=>x.Id == 2);
            var timeZone = _repository.Find<Timezone>().First(x=>x.Id == model.TimezoneId);

            var сompany = new Company
            {
                CompanyName = model.CompanyName,
                ContactName = model.FullName,
                EmailAddress = model.Email,
                PhoneNumber = model.PhoneNumber,
                TimeGoUrl = model.CompanyUrl,
                WorkweekStaryDay = model.WorkweekStaryDay,
                CompanyApproved = companyApproved,
                SubscriptionPlan = subscriptionPlan,
                Timezone = timeZone
            };

            _repository.Add(сompany);
            _repository.Save();

            var random = new Random();
            var confirmEmailCode = random.NextString();

            var employee = new Employee
            {
                CompanyId = сompany.Id,
                EmailAddress = model.Email,
                PhoneNumber = model.PhoneNumber,
                Password = model.Password,
                FirstName = model.FullName,
                IsActive = true,
                RoleId = 2,
                Code = confirmEmailCode
            };

            _repository.Add(employee);
            _repository.Save();

            _emailService.SendConfirmEmail(employee, confirmEmailCode);

            return new ViewError() { Code = Enums.ErrorCodes.Success };
        }

        public ViewError ForgotPassword(string email)
        {
            var user = _repository.Find<Employee>(x => x.EmailAddress == email).SingleOrDefault();
            if (user == null)
                return new ViewError() { Code = Enums.ErrorCodes.NotFoundEmail };

            var random = new Random();
            var forgotPasswordCode = random.NextString();
            user.Code = forgotPasswordCode;
            _repository.Save();
            _emailService.SendForgotPasswordEmail(user, forgotPasswordCode);
            return new ViewError() { Code = Enums.ErrorCodes.Success }; ;
        }

        public void ConfirmEmail(int userId, string code)
        {
            var user = _repository.FindForUpdate<Employee>(userId);
            if(user != null && user.Code == code)
            {
                user.ConfirmEmail = true;
                _repository.Save();
                _emailService.SendWelcomeEmail(user);
            }
        }

        public void ResetPassword(int userId, string code, string password)
        {
            var user = _repository.FindForUpdate<Employee>(userId);
            if (user != null && user.Code == code)
            {
                user.Password = password;
                _repository.Save();
            }
        }
    }
}