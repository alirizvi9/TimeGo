using System;
using System.Linq;
using TimeGo.ApplicationDomain.Dependency;
using TimeGo.ApplicationDomain.Entities;
using TimeGo.ApplicationDomain.Persistance;

namespace TimeGo.ApplicationDomain.DbInitialization
{
    public static partial class DataCreator
    {
        private static IRepository _repository;
        private static TimeGoEntities _context;

        private static Company _testCompany;
        private static Employee _employeeTestcompany;
        private static Employee _secondEmployeeTestcompany;
        private static Employee _taskManagerTestcompany;

        public static void FillDatabaseWithData()
        {
            _repository = Get.Component<IRepository>();
            _context = Get.Component<TimeGoEntities>();

            if (_context.Database.CreateIfNotExists())
            {
                CreateCompanyApproved();
                CreateAprovalStatuses();
                CreateRoles();
                CreateLockStatuses();
                CreateTimeZones();
                CreateSubscriptionPlans();
                CreateCompanies();
                CreateEmployees();
                CreateEmployeeRates();
                CreateTasks();
                CreateTimeoff();
            }
        }

        private static void CreateCompanyApproved()
        {
            var companyApprovedStatuses = new[]
            {
                "New Signup",
                "Approved",
                "Rejected"
            };

            foreach (var approved in companyApprovedStatuses)
            {
                var companyApproved = new CompanyApproved
                {
                    CompanyApprovedType = approved
                };
                _repository.Add(companyApproved);
            }

            _repository.Save();
        }

        private static void CreateAprovalStatuses()
        {
            var approvalStatuses = new[]
            {
                "Saved",
                "Submitted",
                "Approved",
                "Waiting for Approval",
                "Accepted",
                "Denined"
            };

            foreach (var status in approvalStatuses)
            {
                var approvalStatus = new ApprovalStatus
                {
                    ApprovalStatusType = status
                };
                _repository.Add(approvalStatus);
            }

            _repository.Save();
        }

        private static void CreateRoles()
        {
            var roles = new[]
            {
                "Employee",
                "Task Manager",
                "Admin"
            };

            foreach (var r in roles)
            {
                var role = new Role
                {
                    RoleType = r
                };
                _repository.Add(role);
            }

            _repository.Save();
        }

        private static void CreateLockStatuses()
        {
            var lockStatuses = new[]
            {
                "Unlocked",
                "Locked",
                "Request to unlock"
            };

            foreach (var l in lockStatuses)
            {
                var lockStatus = new LockStatus
                {
                    LockStatusType = l
                };
                _repository.Add(lockStatus);
            }

            _repository.Save();
        }

        private static void CreateTimeZones()
        {
            var timezones = new[]
            {
                "Eastern Standard Time",
                "Central Standard Time",
                "Mountain Standard Time",
                "Pacific Standard Time",
                "US Eastern Standard Time",
                "US Mountain Standard Time",
                "Hawaiian Standard Time",
                "Alaskan Standard Time"
            };

            foreach (var tz in timezones)
            {
                var timezone = new Timezone
                {
                    TimezoneName = tz
                };
                _repository.Add(timezone);
            }

            _repository.Save();
        }

        private static void CreateSubscriptionPlans()
        {
            var subscriptionPlans = new[]
            {
                "Free",
                "Basic",
                "Extended",
                "Enterprise"
            };

            foreach (var plan in subscriptionPlans)
            {
                var subscriptionPlan = new SubscriptionPlan
                {
                    SubscriptionPlanType = plan
                };
                _repository.Add(subscriptionPlan);
            }

            _repository.Save();
        }

        private static void CreateCompanies()
        {
            var companyApproved = _repository.Find<CompanyApproved>().First();
            var subscriptionPlan = _repository.Find<SubscriptionPlan>().First();
            var timeZone = _repository.Find<Timezone>().First();

            _testCompany = new Company
            {
                CompanyName = "Test Company",
                ContactName = "John Dou",
                PhoneNumber = "7327572923",
                EmailAddress = "john.dou@testcompany.local",
                TimeGoUrl = "dev4",
                BillingAddressLine1 = "st. Green 1",
                BillingAddressCity = "Some-City",
                BillingAddressState = "Alabama",
                BillingAddressZip = "12323",
                BillingAddressCountry = "USA",
                CompanyApproved = companyApproved,
                SubscriptionPlan = subscriptionPlan,
                Timezone = timeZone
            };
            _repository.Add(_testCompany);

            _repository.Save();
        }

        private static void CreateTimeoff()
        {
            var approvalStatus = _repository.Find<ApprovalStatus>(x => x.Id == 4).SingleOrDefault();

            var newTimeoffRequest = new TimeoffRequest()
            {
                ReturningToWork = DateTime.Now,
                ToDate = DateTime.Now,
                FromDate = DateTime.Now,
                EmployeeId = _employeeTestcompany.Id,
                CompanyId = _testCompany.Id,
                Reason = "Test",
                ApprovalStatusId = approvalStatus.Id,
                ApprovedById = _taskManagerTestcompany.Id,
                ModifiedOn = DateTime.Now,
            };

            _repository.Add(newTimeoffRequest);

            var newTimeoffRequest2 = new TimeoffRequest()
            {
                ReturningToWork = DateTime.Now,
                ToDate = DateTime.Now,
                FromDate = DateTime.Now,
                EmployeeId = _secondEmployeeTestcompany.Id,
                CompanyId = _testCompany.Id,
                Reason = "Test 2",
                ApprovalStatusId = approvalStatus.Id,
                ApprovedById = _taskManagerTestcompany.Id,
                ModifiedOn = DateTime.Now,
            };

            _repository.Add(newTimeoffRequest2);
            _repository.Save();
        }

        private static void CreateEmployees()
        {
            var managerRole = _repository
                .Find<Role>(x => x.RoleType == "Task Manager")
                .Single();

            var employeeRole = _repository
                .Find<Role>(x => x.RoleType == "Employee")
                .Single();

            _taskManagerTestcompany = new Employee
            {
                UserName = "testmanager",
                FirstName = "Test",
                LastName = "Manager",
                EmailAddress = "testmanager@testcompany.local",
                Password = "testpassword",
                PhoneNumber = "7327572923",
                SocialSecurityNumber = "1111111",
                Code = "XXX1",
                IsAdmin = true,
                IsActive = true,
                IsOvertimeCalculated = true,
                Company = _testCompany,
                Role = managerRole
            };
            _repository.Add(_taskManagerTestcompany);

            _employeeTestcompany = new Employee
            {
                UserName = "testemployee",
                FirstName = "Test",
                LastName = "Employee",
                EmailAddress = "testemployee@testcompany.local",
                Password = "testpassword",
                PhoneNumber = "7327572923",
                SocialSecurityNumber = "1111111",
                Code = "XXX1",
                IsAdmin = true,
                IsActive = true,
                IsOvertimeCalculated = true,
                Company = _testCompany,
                Role = employeeRole
            };

            _repository.Add(_employeeTestcompany);

            _secondEmployeeTestcompany = new Employee
            {
                UserName = "testemployee2",
                FirstName = "Test",
                LastName = "Employee",
                EmailAddress = "testemployee2@testcompany.local",
                Password = "testpassword",
                PhoneNumber = "7327572923",
                SocialSecurityNumber = "1111111",
                Code = "XXX1",
                IsAdmin = true,
                IsActive = true,
                IsOvertimeCalculated = true,
                Company = _testCompany,
                Role = employeeRole
            };

            _repository.Add(_secondEmployeeTestcompany);

            _repository.Save();
        }

        private static void CreateEmployeeRates()
        {
            var employeeRate = new EmployeeRate
            {
                RateAmount = 15.0m,
                EffectiveStartDate = DateTime.Today,
                EffectiveEndDate = DateTime.Today.AddDays(10),
                Employee = _employeeTestcompany,
                Company = _testCompany,
            };
            _repository.Add(employeeRate);

            _repository.Save();
        }

        private static void CreateTasks()
        {
            var task = new Task
            {
                TaskName = "Task 1",
                IsActive = true,
                ApproverPrimary = _taskManagerTestcompany,
                Company = _testCompany,
            };
            _repository.Add(task);

            _repository.Save();

            var taskAllowed = new TaskAllowed
            {
                IsActive = true,
                Employee = _employeeTestcompany,
                Task = task
            };
            _repository.Add(taskAllowed);

            _repository.Save();
        }
    }
}
