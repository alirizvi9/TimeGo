using TimeGo.ApplicationDomain.Entities;

namespace TimeGo.Tests.Base.Database
{
    public class SqlServerTestSetUp : IDbSetUp
    {
        private readonly TimeGoEntities _context;

        public SqlServerTestSetUp(string connectionString)
        {
           _context = new TimeGoEntities(connectionString);
        }

        public void SetUp()
        {
            _context.Database.Delete();

            _context.Database.Create();
        }

        public void TearDown()
        {
        }
    }
}