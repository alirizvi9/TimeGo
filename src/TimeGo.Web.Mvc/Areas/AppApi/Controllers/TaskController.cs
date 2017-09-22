using System.Web.Http;
using System.Web.Http.Cors;
using TimeGo.ApplicationDomain.Enums;
using TimeGo.ApplicationDomain.Models;
using TimeGo.ApplicationDomain.Models.Task;
using TimeGo.ApplicationDomain.Services;
using TimeGo.Web.Mvc.Infrastructure.Services;

namespace TimeGo.Web.Mvc.Areas.AppApi.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    [Authorize]
    public class TaskController : BaseApiController
    {
        private readonly IAuthorizationService _authorizationService;
        private readonly ITasksServices _taskService;

        public TaskController(ITasksServices taskService, IAuthorizationService authorizationService)
        {
            _taskService = taskService;
            _authorizationService = authorizationService;
        }

        [HttpPost]
        [Route("api/tasksPage")]
        public IHttpActionResult Get(PagingModel model)
        {
            var user = _authorizationService.GetUser();
            if (user.CompanyId == null)
                return Success();
            var result = _taskService.GetTasks(user, model);
            return Success(result);
        }

        [HttpPost]
        [Route("api/AddTask")]
        public IHttpActionResult AddTimeoff(AddTaskViewModel model)
        {
            var user = _authorizationService.GetUser();
            if (user.CompanyId == null)
                return Success();
            var result = _taskService.AddTask(model, user);
            return result == ErrorCodes.Success ? Success() : Error(result);
        }

        [HttpGet]
        [Route("api/deleteTask")]
        public IHttpActionResult DeleteTask(long id)
        {
            var user = _authorizationService.GetUser();
            if (user.CompanyId == null)
                return Success();
            var result = _taskService.DeleteTask(id, user);
            return result == ErrorCodes.Success ? Success() : Error(result);
        }

        [HttpPost]
        [Route("api/AllowTask")]
        public IHttpActionResult AllowTask(TaskViewModel model)
        {
            var user = _authorizationService.GetUser();
            if (user.CompanyId == null)
                return Success();
            var result = _taskService.AllowTask(model, user);
            return result == ErrorCodes.Success ? Success() : Error(result);
        }
    }
}