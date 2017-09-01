using System.Collections.Generic;
using System.Linq;
using TimeGo.ApplicationDomain.Entities;
using TimeGo.ApplicationDomain.Persistance;
using System.Linq.Dynamic;
using TimeGo.ApplicationDomain.Models.Users;
using TimeGo.ApplicationDomain.Models;
using AutoMapper;

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

        public ResultsModel<UsersListItemViewModel> GetPage(Employee user, string sortExpression, int page, int pageSize)
        {
            var model = new ResultsModel<UsersListItemViewModel>();
            var company = _repository.Find<Company>(x=>x.Id == user.CompanyId).Single();
            var items = _repository.Find<Employee>(x=> company.Id == x.CompanyId).OrderBy(sortExpression).Skip(pageSize * (page - 1)).Take(pageSize);
            model.Results = Mapper.Map<List<UsersListItemViewModel>>(items);
            model.Count = Count();
            model.Page = page;
            return model;
        }

        public int Count()
        {
            return _repository.Find<Employee>().Count();
        }

        public void DeleteEmployee(long id)
        {
            var employee = _repository.Find<Employee>(x => x.Id == id).SingleOrDefault();
            if (employee != null)
            {
                _repository.Delete(employee);
            }

        }
    }
}
