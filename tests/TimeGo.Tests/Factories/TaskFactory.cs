using System;
using TimeGo.ApplicationDomain.Entities;
using TimeGo.ApplicationDomain.Persistance;
using TimeGo.Tests.Base.Facotries;

namespace TimeGo.Tests.Factories
{
    public class TaskFactory : BaseFactory<Task>
    {
        public TaskFactory(IRepository repository)
            : base(repository)
        {
        }

        protected override Task CreateNew()
        {
            return new Task
            {
                TaskName = "Task " + Counter,
                IsActive = true,
                Company = Factory.Create<Company>(),
                ApproverPrimary = Factory.Create<Employee>(),
                ApproverSecondary = Factory.Create<Employee>(),
                CreatedOn = DateTime.UtcNow
            };
        }
    }
}
