using System;
using System.Collections.Generic;
using System.Linq;
using TimeGo.ApplicationDomain.Entities;
using TimeGo.ApplicationDomain.Enums;
using TimeGo.ApplicationDomain.Extensions;
using TimeGo.ApplicationDomain.Models;
using TimeGo.ApplicationDomain.Models.Users;
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

        public List<CompanyApproved> GetCompanyApproves()
        {
            return _repository.Find<CompanyApproved>().ToList();
        }

        public List<SubscriptionPlan> GetSubscriptionPlans()
        {
            return _repository.Find<SubscriptionPlan>().ToList();
        }

        public List<Timezone> GetTimeZones()
        {
            return _repository.Find<Timezone>().ToList();
        }

        public ErrorCodes AddEmployee(AddEmployeeViewModel model, Employee user)
        {
            if (user.Role.RoleType != "Task Manager")
                return ErrorCodes.NoAccess;
            var employee = _repository.Find<Employee>().SingleOrDefault(x => x.EmailAddress == model.Email);
            if (employee != null)
                return ErrorCodes.EmailAlreadyExists;
            var company = _repository.Find<Company>().SingleOrDefault(x => x.Id == user.CompanyId);
            var newEmployee = new Employee
            {
                CompanyId = company.Id,
                EmailAddress = model.Email,
                PhoneNumber = model.PhoneNumber,
                Password = model.Password,
                FirstName = model.FirstName,
                LastName = model.LastName,
                IsActive = true,
                RoleId = model.IsAdmin ? 2 : 1,
                Company = company,
                IsAdmin = model.IsAdmin,
                IsOvertimeCalculated = true,
                IsRegistrate = true
            };
            _repository.Add(newEmployee);
            _repository.Save();
            return ErrorCodes.Success;
        }

        public AddEmployeeViewModel GetEmployee(string email)
        {
            var employee = _repository.Find<Employee>().SingleOrDefault(x => x.EmailAddress == email);
            if (employee == null)
                return null;

            return new AddEmployeeViewModel()
            {
                PhoneNumber = employee.PhoneNumber,
                Email = employee.EmailAddress,
                IsAdmin = employee.IsAdmin,
                FirstName = employee.FirstName,
                LastName = employee.LastName,
                Password = employee.Password
            };
        }

        public ErrorCodes AddEmployee(AddEmployeeViewModel model, Company company)
        {
            var employee = _repository.Find<Employee>().SingleOrDefault(x => x.EmailAddress == model.Email);
            employee.FirstName = model.FirstName;
            employee.LastName = model.LastName;
            employee.Password = model.Password;
            employee.PhoneNumber = model.PhoneNumber;
            employee.IsRegistrate = true;
            _repository.Save();
            return ErrorCodes.Success;
        }

        public ErrorCodes InviteEmployee(InviteEmployeeViewModel model, Employee user)
        {
            if (user.Role.RoleType != "Task Manager")
                return ErrorCodes.NoAccess;
            var employee = _repository.Find<Employee>().SingleOrDefault(x => x.EmailAddress == model.Email);
            if (employee != null)
                return ErrorCodes.EmailAlreadyExists;
            var newEmployee = new Employee
            {
                CompanyId = user.CompanyId,
                EmailAddress = model.Email,
                FirstName = model.FirstName,
                LastName = model.LastName,
                IsActive = true,
                RoleId = model.IsAdmin ? 2 : 1,
                Company = user.Company,
                IsAdmin = model.IsAdmin,
                IsOvertimeCalculated = true,
                InviteOn = DateTime.Now,
                IsRegistrate = false
            };
            _repository.Add(newEmployee);
            _repository.Save();
            _emailService.SendInviteEmail(user.Company.TimeGoUrl, model.Email);

            return ErrorCodes.Success;
        }

        public ErrorCodes ReInviteEmployee(long id, Employee user)
        {
            var employee = _repository.Find<Employee>(x => x.Id == id).SingleOrDefault();
            employee.InviteOn = DateTime.Now;
            _repository.Save();
            if (employee == null)
                return ErrorCodes.NotFoundEmail;
            _emailService.SendInviteEmail(user.Company.TimeGoUrl, employee.EmailAddress);
            return ErrorCodes.Success;
        }

        public ErrorCodes EditEmployee(UsersListItemViewModel employee, Employee user)
        {
            if (user.Role.RoleType != "Task Manager")
                return ErrorCodes.NoAccess;
            var employeeDb = _repository.Find<Employee>(x => x.Id == employee.Id).SingleOrDefault();
            if (employeeDb == null)
                return ErrorCodes.NotFoundEmail;

            employeeDb.EmailAddress = employee.Email;
            employeeDb.FirstName = employee.FirstName;
            employeeDb.SocialSecurityNumber = employee.Last4Ss;
            employeeDb.LastName = employee.LastName;
            employeeDb.PhoneNumber = employee.Phone;
            employeeDb.RoleId = employee.IsAdmin ? 2 : 1;
            employeeDb.IsAdmin = employee.IsAdmin;
            employeeDb.IsActive = employee.IsActive;
            _repository.Save();
            return ErrorCodes.Success;
        }

        public ErrorCodes SignUp(SignUpRequest model)
        {
            var company = _repository.Find<Company>().SingleOrDefault(x => x.TimeGoUrl == model.CompanyUrl);
            if (company != null)
                return ErrorCodes.CompanyAlreadyExists;
            var user = _repository.Find<Employee>().SingleOrDefault(x => x.EmailAddress == model.Email);
            if (user != null)
                return ErrorCodes.EmailAlreadyExists;

            var companyApproved = _repository.Find<CompanyApproved>().First(x => x.Id == 1);
            var subscriptionPlan = _repository.Find<SubscriptionPlan>().First(x => x.Id == 2);
            var timeZone = _repository.Find<Timezone>().FirstOrDefault(x => x.Id == model.TimezoneId);

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

            var managerRole = _repository
               .Find<Role>(x => x.RoleType == "Task Manager")
               .Single();

            var employee = new Employee
            {
                CompanyId = сompany.Id,
                EmailAddress = model.Email,
                PhoneNumber = model.PhoneNumber,
                Password = model.Password,
                FirstName = model.FullName,
                IsActive = true,
                RoleId = 2,
                Code = confirmEmailCode,
                Company = сompany,
                Role = managerRole,
                IsAdmin = true,
                IsOvertimeCalculated = true,
                IsRegistrate = true
            };

            _repository.Add(employee);
            _repository.Save();

            _emailService.SendConfirmEmail(employee, confirmEmailCode);

            return ErrorCodes.Success;
        }

        public ErrorCodes ForgotPassword(string email)
        {
            var user = _repository.Find<Employee>(x => x.EmailAddress == email).SingleOrDefault();
            if (user == null)
                return ErrorCodes.NotFoundEmail;

            var random = new Random();
            var forgotPasswordCode = random.NextString();
            user.Code = forgotPasswordCode;
            _repository.Save();
            _emailService.SendForgotPasswordEmail(user, forgotPasswordCode);
            return ErrorCodes.Success;
        }

        public void ConfirmEmail(int userId, string code)
        {
            var user = _repository.FindForUpdate<Employee>(userId);
            if (user != null && user.Code == code)
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