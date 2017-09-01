using System.Collections.Generic;
using TimeGo.ApplicationDomain.Entities;
using TimeGo.ApplicationDomain.Models;
using TimeGo.ApplicationDomain.Models.Users;

namespace TimeGo.ApplicationDomain.Services
{
    public interface IEmployeeService
    {
        IEnumerable<Employee> GetAll();
        int Count();
        ResultsModel<UsersListItemViewModel> GetPage(Employee user, string sortExpression, int page, int pageSize);
        IEnumerable<Employee> GetPage(string sortExpression, int page, int pageSize);
        void DeleteEmployee(long id);
    }
}
