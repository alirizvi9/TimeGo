using TimeGo.ApplicationDomain.Entities;
using TimeGo.ApplicationDomain.Enums;
using TimeGo.ApplicationDomain.Models;
using TimeGo.ApplicationDomain.Models.Task;

namespace TimeGo.ApplicationDomain.Services
{
    public interface ITasksServices
    {
        ResultsModel<TaskViewModel> GetTasks(Employee user, PagingModel model);
        ErrorCodes AddTask(AddTaskViewModel model, Employee user);
        ErrorCodes DeleteTask(long id, Employee user);
        ErrorCodes AllowTask(TaskViewModel model, Employee user);
    }
}
