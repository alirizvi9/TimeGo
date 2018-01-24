using System.Collections.Generic;
using System.Linq;
using TimeGo.ApplicationDomain.Entities;
using TimeGo.ApplicationDomain.Enums;
using TimeGo.ApplicationDomain.Persistance;
using System.Linq.Dynamic;
using TimeGo.ApplicationDomain.Models.CompanyProfile;

namespace TimeGo.ApplicationDomain.Services.Implementation
{
    public class CompanyService : ICompanyService
    {
        private readonly IRepository _repository;

        public CompanyService(IRepository repository)
        {
            _repository = repository;
        }

        public Company GetCompanyFromUrl(string url)
        {
            var subDomain = url.Split('.')[0].Replace("http://", "").Replace("https://", "");
            var company = _repository.Find<Company>().SingleOrDefault(c => c.TimeGoUrl == subDomain);
            return company;
        }

        public IEnumerable<Company> GetAll()
        {
            return _repository.Find<Company>();
        }

        public IEnumerable<Company> GetPage(string sortExpression, int page, int pageSize)
        {
            return _repository.Find<Company>().OrderBy(sortExpression).Skip(pageSize * (page - 1)).Take(pageSize);
        }

        public int Count()
        {
            return _repository.Find<Company>().Count();
        }

        public ErrorCodes EditCompany(Company model)
        {
            var company = _repository.FindForUpdate<Company>(model.Id);
            company.CompanyName = model.CompanyName;
            company.EmailAddress = model.EmailAddress;
            company.ContactName = model.ContactName;
            company.TimezoneId = model.TimezoneId;
            company.WorkweekStaryDay = model.WorkweekStaryDay;
            company.PhoneNumber = model.PhoneNumber;
            company.TimeGoUrl = model.TimeGoUrl;
            company.CompanyApprovedId = model.CompanyApprovedId;
            company.SubscriptionPlanId = model.SubscriptionPlanId;
            _repository.Save();
            return ErrorCodes.Success;
        }

        public ErrorCodes EditCompany(CompanyProfileViewModel model, Employee user)
        {
            var company = _repository.FindForUpdate<Company>(model.Id);
            var profile = _repository.FindForUpdate<Employee>(user.Id);
            if (company == null || profile == null)
                return ErrorCodes.NotFound;
            if (user.Role.RoleType == "Task Manager")
            {
                company.CompanyName = model.CompanyName;
                company.ContactName = $"{model.FirstName} {model.LastName}";
                company.PhoneNumber = model.PhoneNumber;
                company.EmailAddress = model.EmailAddress;
                company.VacationApproverEmail = model.VacationApproverEmail;
                if (model.WorkWeekStartDay != null)
                    company.WorkweekStaryDay = (Weekdays)model.WorkWeekStartDay;
                company.TimePeriodsInFuture = model.TimesheetsWeeks;
                company.TimeGoUrl = model.TimeGoUrl;
            }
            profile.FirstName = model.FirstName;
            profile.LastName = model.LastName;
            profile.PhoneNumber = model.PhoneNumber;
            profile.EmailAddress = model.EmailAddress;
            _repository.Save();
            return ErrorCodes.Success;
        }

        public ErrorCodes EditBillingAddress(Company model)
        {
            var company = _repository.FindForUpdate<Company>(model.Id);
            company.BillingAddressLine1 = model.BillingAddressLine1;
            company.BillingAddressLine2 = model.BillingAddressLine2;
            company.BillingAddressCity = model.BillingAddressCity;
            company.BillingAddressState = model.BillingAddressState;
            company.BillingAddressZip = model.BillingAddressZip;
            company.BillingAddressCountry = model.BillingAddressCountry;
            _repository.Save();
            return ErrorCodes.Success;
        }

        public Company GetCompany(long id)
        {
            return _repository.Find<Company>(x => x.Id == id).SingleOrDefault();
        }

        public Employee GetCompanyAdmin(long id)
        {
            return _repository.Find<Employee>(x => x.CompanyId == id && x.RoleId == 2).SingleOrDefault();
        }

        public void DeleteCompany(long id)
        {
            var company = _repository.Find<Company>(x => x.Id == id).SingleOrDefault();
            if (company != null)
            {
                _repository.Delete(company);
                var users = _repository.Find<Employee>(x => x.CompanyId == id);
                foreach(var user in users)
                {
                    _repository.Delete(user);
                }
                _repository.Save();
            }
        }
    }
}