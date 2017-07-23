using System.Linq;
using TimeGo.ApplicationDomain.Entities;
using TimeGo.ApplicationDomain.Persistance;

namespace TimeGo.ApplicationDomain.Services.Implementation
{
    public class CompanyService : ICompanyService
    {
        private readonly IRepository _repository;

        public CompanyService(IRepository repository)
        {
            _repository = repository;
        }

        public Company GetCompanyFromUrl(string url)
        {
            var subDomain = url.Split('.')[0].Replace("http://", "").Replace("https://", "");
            var company = _repository.Find<Company>().SingleOrDefault(c => c.TimeGoUrl == subDomain);
            return company;
        }
    }
}