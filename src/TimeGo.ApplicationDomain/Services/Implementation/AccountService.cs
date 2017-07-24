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
                return new ViewError() { Name = "CompanyURL", Message = Resource.UrlAlreadyExist };
            var user = _repository.Find<Employee>().SingleOrDefault(x => x.EmailAddress == model.Email);
            if(user != null)
                return new ViewError() { Name = "Email", Message = Resource.EmailAlreadyExist };

            var сompany = new Company
            {
                CompanyName = model.CompanyName,
                ContactName = model.FullName,
                EmailAddress = model.Email,
                PhoneNumber = model.PhoneNumber,
                TimeGoUrl = model.CompanyUrl,
                TimezoneId = model.TimezoneId,
                WorkweekStaryDay = model.WorkweekStaryDay
            };

            _context.Entry(сompany).State = System.Data.Entity.EntityState.Added;
            _context.SaveChanges();

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

            _context.Entry(employee).State = System.Data.Entity.EntityState.Added;
            _context.SaveChanges();

            _emailService.SendConfirmEmail(employee, confirmEmailCode);

            return null;
        }

        public ViewError ForgotPassword(string email)
        {
            var user = _context.Employees.FirstOrDefault(x => x.EmailAddress == email);
            if (user == null)
                return new ViewError() { Name = "Email", Message = Resource.NotFounEmail };

            var random = new Random();
            var forgotPasswordCode = random.NextString();
            user.Code = forgotPasswordCode;
            _context.Entry(user).State = System.Data.Entity.EntityState.Modified;
            _context.SaveChanges();
            _emailService.SendForgotPasswordEmail(user, forgotPasswordCode);
            return null;
        }

        public void ConfirmEmail(int userId, string code)
        {
            var user = _context.Employees.FirstOrDefault(x => x.Id == userId);
            if(user != null && user.Code == code)
            {
                user.ConfirmEmail = true;
                _context.Entry(user).State = System.Data.Entity.EntityState.Modified;
                _context.SaveChanges();
                _emailService.SendWelcomeEmail(user);
            }
        }

        public void ResetPassword(int userId, string code, string password)
        {
            var user = _context.Employees.FirstOrDefault(x => x.Id == userId);
            if (user != null && user.Code == code)
            {
                user.Password = password;
                _context.Entry(user).State = System.Data.Entity.EntityState.Modified;
                _context.SaveChanges();
            }
        }
    }
}