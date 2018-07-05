using System;
using System.Linq;
using System.Linq.Dynamic;
using TimeGo.ApplicationDomain.Entities;
using TimeGo.ApplicationDomain.Enums;
using TimeGo.ApplicationDomain.Models;
using TimeGo.ApplicationDomain.Models.Task;
using TimeGo.ApplicationDomain.Persistance;

namespace TimeGo.ApplicationDomain.Services.Implementation
{
    public class TasksServices : ITasksServices
    {
        private readonly IRepository _repository;

        public TasksServices(IRepository repository)
        {
            _repository = repository;
        }

        public ResultsModel<TaskViewModel> GetTasks(Employee user, PagingModel model)
        {
            if (user.Role.RoleType != "Task Manager")
                return new ResultsModel<TaskViewModel>();
            var tasks = _repository.Find<Task>(x => x.CompanyId == user.CompanyId);
            var users = _repository.Find<Employee>(x => x.CompanyId == user.CompanyId).ToList();
            var result = new ResultsModel<TaskViewModel>()
            {
                Results = tasks.OrderBy(model.SortExpression).Skip(model.PageSize * (model.Page - 1)).Take(model.PageSize).Select(x => new TaskViewModel()
                {
                    Id = x.Id,
                    ApproverPrimary = x.ApproverPrimary.EmailAddress,
                    ApproverSecondary = x.ApproverSecondary.EmailAddress,
                    IsActive = x.IsActive,
                    TaskName = x.TaskName
                }).ToList(),
                Count = tasks.Count(),
                Page = model.Page
            };
            foreach(var task in result.Results)
            {
                task.Allows = users.Select(u => new AllowUser()
                {
                    FirstName = u.FirstName,
                    LastName = u.LastName,
                    UserId = u.Id,
                    Allow = _repository.Find<TaskAllowed>(t => t.TaskId == task.Id && u.Id == t.EmployeeId).Any()
                }).ToList();
            }
            return result;
        }

        public ErrorCodes AddTask(AddTaskViewModel model, Employee user)
        {
            if (user.Role.RoleType != "Task Manager")
                return ErrorCodes.NoAccess;
            var newTask = new Task();
            newTask.TaskName = model.TaskName;
            newTask.IsActive = true;
            newTask.ApproverPrimaryId = user.Id;
            newTask.CompanyId = user.CompanyId;
            _repository.Add(newTask);
            _repository.Save();
            return ErrorCodes.Success;
        }

        public ErrorCodes EditTask(TaskViewModel model, Employee user)
        {
            if (user.Role.RoleType != "Task Manager")
                return ErrorCodes.NoAccess;

            var task = _repository.Find<Task>(x => x.Id == model.Id).SingleOrDefault();
            if (task == null)
                return ErrorCodes.NotFound;

            task.TaskName = model.TaskName;
            _repository.Save();
            return ErrorCodes.Success;
        }

        public ErrorCodes DeleteTask(long id, Employee user)
        {
            if (user.Role.RoleType != "Task Manager")
                return ErrorCodes.NoAccess;
            var task = _repository.Find<Task>(x => x.Id == id).SingleOrDefault();
            if (task != null)
            {
                var allows = _repository.Find<TaskAllowed>(x => x.TaskId == task.Id).ToList();
                var lines = _repository.Find<TimesheetLine>(x => x.TaskId == task.Id).ToList();
                foreach (var line in lines)
                {
                    line.TaskId = null;
                    line.Task = null;
                }
                foreach (var allow in allows)
                {
                    _repository.Delete(allow);
                }
                _repository.Delete(task);
                _repository.Save();
            }
            return ErrorCodes.Success;
        }

        public ErrorCodes AllowTask(TaskViewModel model, Employee user)
        {
            if (user.Role.RoleType != "Task Manager")
                return ErrorCodes.NoAccess;
            var usersId = model.Allows.Where(x => x.Allow).Select(x => x.UserId);
            var task = _repository.Find<Task>(x => x.Id == model.Id).SingleOrDefault();
            var users = _repository.Find<Employee>(x => usersId.Any(y => y == x.Id)).ToList();
            var allows = _repository.Find<TaskAllowed>(x => x.TaskId == model.Id).ToList();
            foreach (var employee in users)
            {
                if (allows.All(x => x.EmployeeId != employee.Id))
                {
                    _repository.Add(new TaskAllowed()
                    {
                        CreatedOn = DateTime.Now,
                        EmployeeId = employee.Id,
                        TaskId = task.Id,
                        IsActive = task.IsActive
                    });
                }
            }
            foreach (var allow in allows)
            {
                if (users.All(x => x.Id != allow.EmployeeId))
                {
                    _repository.Delete(allow);
                }
            }
            _repository.Save();
            return ErrorCodes.Success;
        }
    }
}
