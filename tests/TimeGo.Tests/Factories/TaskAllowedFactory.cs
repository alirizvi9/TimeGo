using System;
using TimeGo.ApplicationDomain.Entities;
using TimeGo.ApplicationDomain.Persistance;
using TimeGo.Tests.Base.Facotries;

namespace TimeGo.Tests.Factories
{
    public class TaskAllowedFactory : BaseFactory<TaskAllowed>
    {
        public TaskAllowedFactory(IRepository repository)
            : base(repository)
        {
        }

        protected override TaskAllowed CreateNew()
        {
            return new TaskAllowed
            {
                IsActive = true,
                Task = Factory.Create<Task>(),
                Employee = Factory.Create<Employee>(),
                CreatedOn = DateTime.UtcNow
            };
        }
    }
}
