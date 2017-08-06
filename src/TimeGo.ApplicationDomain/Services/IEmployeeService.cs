using System.Collections.Generic;
using TimeGo.ApplicationDomain.Entities;
using TimeGo.ApplicationDomain.Enums;

namespace TimeGo.ApplicationDomain.Services
{
    public interface IEmployeeService
    {
        IEnumerable<Employee> GetAll();
        int Count();
        ErrorCodes EditCompany(Employee model);
        IEnumerable<Employee> GetPage(string sortExpression, int page, int pageSize);
        Employee GetCompany(long id);
        void DeleteCompany(long id);
    }
}
