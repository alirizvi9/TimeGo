using System.Collections.Generic;
using System.Linq;
using TimeGo.ApplicationDomain.Entities;
using TimeGo.ApplicationDomain.Enums;
using TimeGo.ApplicationDomain.Persistance;
using System.Linq.Dynamic;

namespace TimeGo.ApplicationDomain.Services.Implementation
{
    public class EmployeeService : IEmployeeService
    {
        private readonly IRepository _repository;

        public EmployeeService(IRepository repository)
        {
            _repository = repository;
        }

        public IEnumerable<Employee> GetAll()
        {
            return _repository.Find<Employee>();
        }

        public IEnumerable<Employee> GetPage(string sortExpression, int page, int pageSize)
        {
            return _repository.Find<Employee>().OrderBy(sortExpression).Skip(pageSize * (page - 1)).Take(pageSize);
        }

        public int Count()
        {
            return _repository.Find<Employee>().Count();
        }

        public ErrorCodes EditCompany(Employee model)
        {
            var company = _repository.FindForUpdate<Employee>(model.Id);
            
            _repository.Save();
            return ErrorCodes.Success;
        }

        public Employee GetCompany(long id)
        {
            return _repository.Find<Employee>(x => x.Id == id).SingleOrDefault();
        }

        public void DeleteCompany(long id)
        {
            var company = _repository.Find<Employee>(x => x.Id == id).SingleOrDefault();
            if (company != null)
            {
                _repository.Delete(company);
            }
        }
    }
}
