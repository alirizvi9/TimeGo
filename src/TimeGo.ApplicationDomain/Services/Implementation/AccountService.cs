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

        public AccountService(TimeGoEntities context, IEmailService emailService)
        {
            _context = context;
            _emailService = emailService;
        }

        public List<Timezone> GetTimeZones()
        {
            return _context.Timezones.ToList();
        }

        public ViewError SignUp(SignUpViewModel model)
        {
            var company = _context.Companies.FirstOrDefault(x=>x.TimeGoURL == model.CompanyURL);
            if (company != null)
                return new ViewError() { Name = "CompanyURL", Message = Resource.UrlAlreadyExist };
            var user = _context.Employees.FirstOrDefault(x => x.EmailAddress == model.Email);
            if(user != null)
                return new ViewError() { Name = "Email", Message = Resource.EmailAlreadyExist };

            Company Company = new Company();
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

            Employee Employee = new Employee();
            Employee.CompanyId = Company.CompanyId;
            Employee.EmailAddress = model.Email;
            Employee.Phonenumber = model.PhoneNumber;
            Employee.Password = model.Password;
            Employee.FirstName = model.FullName;
            Employee.IsActive = true;
            Employee.RoleId = 2;

            _context.Entry(Employee).State = System.Data.Entity.EntityState.Added;
            _context.SaveChanges();
            return null;
        }

        public bool ForgotPassword()
        {
            return true;
        }

        public void ConfirEmail(int userId, string code)
        {

        }

        public void ResetPassword(int userId, string password)
        {

        }

        public string GenereteCode()
        {
            return string.Empty;
        }
    }
}