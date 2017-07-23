using TimeGo.ApplicationDomain.Dependency;
using TimeGo.ApplicationDomain.Entities;
using TimeGo.ApplicationDomain.Persistance;

namespace TimeGo.ApplicationDomain.DbInitialization
{
    public static partial class DataCreator
    {
        private static IRepository _repository;
        private static TimeGoEntities _context;

        public static void FillDatabaseWithData()
        {
            _repository = Get.Component<IRepository>();
            _context = Get.Component<TimeGoEntities>();

            _context.Database.CreateIfNotExists();

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
