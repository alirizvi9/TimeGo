using TimeGo.ApplicationDomain.Entities;
using TimeGo.ApplicationDomain.Persistance;

namespace TimeGo.ApplicationDomain.DbInitialization
{
    public static partial class DataCreator
    {
        private static IRepository _repository;

        public static void FillDatabaseWithData(IRepository repository)
        {
            _repository = repository;

            CreateCompanies();
        }

        public static void CreateCompanies()
        {
            var company = new Company
            {

            };

            _repository.Add(company);

            _repository.Save();
        }
    }
}
