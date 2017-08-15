using System;
using TimeGo.ApplicationDomain.Entities;
using TimeGo.ApplicationDomain.Persistance;
using TimeGo.Tests.Base.Facotries;

namespace TimeGo.Tests.Factories
{
    public class EmployeeFactory : BaseFactory<Employee>
    {
        public EmployeeFactory(IRepository repository)
            : base(repository)
        {
        }

        protected override Employee CreateNew()
        {
            return new Employee
            {
                FirstName = "John",
                LastName = "Dou " + Counter,
                EmailAddress = "email@test.local",
                IsActive = true,
                Company = Factory.Create<Company>(),
                Role = Factory.Create<Role>(),
                CreatedOn = DateTime.UtcNow
            };
        }
    }
}
