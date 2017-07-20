using System;
using System.Collections.Generic;
using System.Linq;
using TimeGo.ApplicationDomain.Models.ViewModels;
using TimeGo.Data;

namespace TimeGo.ApplicationDomain
{
    public class AccountService : IAccountService
    {
        private readonly TimeGoEntities _context;
        private readonly IEmailService _emailService;
        private Random random = new Random();
        private string chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        private int lengthCode = 8;

        public AccountService(TimeGoEntities context, IEmailService emailService)
        {
            _context = context;
            _emailService = emailService;
        }

        public List<Timezone> GetTimeZones()
        {
            return _context.Timezones.ToList();
        }

        public ViewError SignUp(SignUpModel model)
        {
            var company = _context.Companies.FirstOrDefault(x=>x.TimeGoURL == model.CompanyURL);
            if (company != null)
                return new ViewError() { Name = "CompanyURL", Message = Resource.UrlAlreadyExist };
            var user = _context.Employees.FirstOrDefault(x => x.EmailAddress == model.Email);
            if(user != null)
                return new ViewError() { Name = "Email", Message = Resource.EmailAlreadyExist };

            var Company = new Company();
            Company.CompanyName = model.CompanyName;
            Company.ContactName = model.FullName;
            Company.EmailAddress = model.Email;
            Company.PhoneNumber = model.PhoneNumber;
            Company.TimeGoURL = model.CompanyURL;
            Company.UpdatedOn = DateTime.UtcNow;

            Company.TimezoneId = model.TimezoneId;
            Company.WorkweekStaryDay = (int?)model.WorkweekStaryDay;


            _context.Entry(Company).State = System.Data.Entity.EntityState.Added;
            _context.SaveChanges();

            var confirmEmailCode = GenereteCode();

            var Employee = new Employee();
            Employee.CompanyId = Company.CompanyId;
            Employee.EmailAddress = model.Email;
            Employee.Phonenumber = model.PhoneNumber;
            Employee.Password = model.Password;
            Employee.FirstName = model.FullName;
            Employee.IsActive = true;
            Employee.RoleId = 2;
            Employee.Code = confirmEmailCode;

            _context.Entry(Employee).State = System.Data.Entity.EntityState.Added;
            _context.SaveChanges();

            _emailService.SendConfirmEmail(Employee, confirmEmailCode);

            return null;
        }

        public ViewError ForgotPassword(string email)
        {
            var user = _context.Employees.FirstOrDefault(x => x.EmailAddress == email);
            if (user == null)
                return new ViewError() { Name = "Email", Message = Resource.NotFounEmail };
            var forgotPasswordCode = GenereteCode();
            user.Code = forgotPasswordCode;
            _context.Entry(user).State = System.Data.Entity.EntityState.Modified;
            _context.SaveChanges();
            _emailService.SendForgotPasswordEmail(user, forgotPasswordCode);
            return null;
        }

        public void ConfirmEmail(int userId, string code)
        {
            var user = _context.Employees.FirstOrDefault(x => x.EmployeeId == userId);
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
            var user = _context.Employees.FirstOrDefault(x => x.EmployeeId == userId);
            if (user != null && user.Code == code)
            {
                user.Password = password;
                _context.Entry(user).State = System.Data.Entity.EntityState.Modified;
                _context.SaveChanges();
            }
        }

        public string GenereteCode()
        {
            return new string(Enumerable.Repeat(chars, lengthCode).Select(s => s[random.Next(s.Length)]).ToArray());
        }
    }
}